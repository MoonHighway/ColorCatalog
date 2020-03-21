import React, { useState, useEffect, createContext, useContext } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native";
import Color from "color";

const colorPredicate = color => c => c.color === color;
const colorNotFound = (color, colors) => !colors.some(colorPredicate);
const colorExists = (color, arr = []) => {
  if (arr.some(colorPredicate(color)))
    throw new Error(
      `Color ${color} already exists in the list at index ${arr.findIndex(
        c => c.color === color
      )}`
    );
};
const invalidColor = color => {
  try {
    new Color(color);
    return false;
  } catch {
    return true;
  }
};

const ColorContext = createContext([]);
export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };

  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = color => {
    if (invalidColor(color)) return;
    if (colorExists(color, colors)) return;
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };

  const removeColor = color => {
    if (colorNotFound(color)) return;
    const newColors = colors.filter(colorPredicate);
    setColors(newColors);
  };

  const clearColors = () => {
    AsyncStorage.removeItem("@ColorListStore:Colors");
    setColors([]);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
