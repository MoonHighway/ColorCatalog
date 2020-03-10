import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  RefreshControl
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState();

  const loadPet = async () => {
    setLoading(true);
    const res = await fetch("http://pet-library.moonhighway.com/api/randomPet");
    const data = await res.json();
    console.log("loading image");
    await Image.prefetch(data.photo.full);
    console.log(r);
    console.log("image loaded");
    setPet(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPet();
  }, []);

  if (!pet) return <ActivityIndicator size="large" />;

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadPet} />
        }
      >
        <Image
          style={styles.pic}
          source={{ uri: pet.photo.full, cache: "force-cache" }}
        />
        <Text style={styles.paragraph}>
          {pet.name} - {pet.category}
        </Text>
      </ScrollView>
    </SafeAreaView>
=======
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={ColorList} />
        <Screen name="Details" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
>>>>>>> parent of fc10067... Color Details Complete
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
