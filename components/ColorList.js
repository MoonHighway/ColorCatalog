import React from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import { useColors } from "../hooks";
import { SwipeListView } from "react-native-swipe-list-view";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function ColorList({ navigation }) {
  const { colors, addColor, removeColor } = useColors();

  return (
    <>
      <ColorForm onNewColor={addColor} />
      <SwipeListView
        data={colors}
        style={styles.container}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              id={item.id}
              backgroundColor={item.color}
              onRemoveColor={removeColor}
              onPress={() =>
                navigation.navigate("Details", { color: item.color })
              }
            />
          );
        }}
        renderHiddenItem={({ item }, rowMap) => {
          return (
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                console.log("press");
                Alert.alert(
                  `Remove ${item.color}`,
                  `Are you absolutly sure that you want to remove ${item.color} from your list of colors?`,
                  [
                    { text: "Remove", onPress: f => removeColor(item.id) },
                    { text: "Cancel" }
                  ]
                );
              }}
            >
              <View style={styles.deleteButton}>
                <AntDesign name="delete" style={styles.deleteIcon} />
              </View>
            </TouchableHighlight>
          );
        }}
        rightOpenValue={-75}
      ></SwipeListView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },
  deleteButton: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: Dimensions.get("window").width - 80,
    padding: 15,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 15
  },
  deleteIcon: {
    color: "red",
    fontSize: 30
  }
});
