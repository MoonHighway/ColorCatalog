import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import Constants from "expo-constants";

const PetDetails = ({ name, photo }) => (
  <View>
    <Image style={styles.pic} source={{ uri: photo.full }} />
    <Text style={styles.paragraph}>{name}</Text>
  </View>
);

export default function App() {
  const [pet, setPet] = useState();

  const loadPet = async () => {
    const res = await fetch("http://pet-library.moonhighway.com/api/randomPet");
    const data = await res.json();
    await Image.prefetch(data.photo.full);
    setPet(data);
  };

  useEffect(() => {
    loadPet();
  }, []);

  return (
    <View style={styles.container}>
      {!pet && <ActivityIndicator size="large" />}
      {pet && <PetDetails {...pet} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  pic: {
    width: 500,
    height: 500
  }
});
