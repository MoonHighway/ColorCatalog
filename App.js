import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import Info from "./components/Info";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          options={({ navigation }) => ({
            title: "Color List",
            headerLeft: () => (
              <Entypo
                name="info-with-circle"
                style={{ padding: 3, paddingLeft: 8 }}
                size={38}
                color="black"
                onPress={() => navigation.navigate("Info")}
              />
            )
          })}
          component={ColorList}
        />
        <Screen name="Details" component={ColorDetails} />
        <Screen
          name="Info"
          component={Info}
          options={{ gestureDirection: "horizontal-inverted" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
