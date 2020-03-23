import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED"
  }
});
