import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage, Alert } from "react-native";
import Color from "color";

export const useColors = () => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };

  // Load Colors
  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  // Save Colors
  useEffect(() => {
    AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = color => {
    try {
      Color(color);
      const newColor = { id: generate(), color };
      setColors([newColor, ...colors]);
    } catch (error) {
      Alert.alert(`${color} is an invalid color.`);
    }
  };

  const removeColor = id => setColors(colors.filter(c => c.id !== id));

  return { colors, addColor, removeColor };
};
