import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput} />
      <Button title="add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FEFEFE",
    height: 50
  },
  txtInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: "snow"
  }
});
