import React from "react";
import { View, StyleSheet, Text, Image, Button, Linking } from "react-native";
import MoonHighwayLogo from "../assets/moon-highway-logo.png";
import Logo from "../assets/cc-icon.png";

export default function Info() {
  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={MoonHighwayLogo} />
      <Image style={styles.icon} source={Logo} />
      <Text style={styles.header}>Color Catalog</Text>
      <Text style={styles.text}>
        The Color Organizer is the product of Moon Highway's Learning React
        Native Course. This course is available on LinkedIn Learning.
      </Text>
      <Button
        title="Take the course"
        onPress={() =>
          Linking.openURL(
            "https://www.linkedin.com/learning/learning-react-native-2/prepare-the-color-list?u=2125562"
          )
        }
      />
      <Button
        title="About Moon Highway"
        onPress={() => Linking.openURL("https://moonhighway.com/about")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center"
  },
  pic: {
    marginTop: -100,
    width: 300,
    resizeMode: "contain"
  },
  icon: {
    marginTop: -40,
    marginBottom: 40
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: -20,
    marginBottom: 25
  },
  text: {
    padding: 5,
    marginBottom: 45
  }
});
