import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import Settings from "./components/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

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
              <Feather
                name="settings"
                style={{ padding: 3 }}
                size={38}
                color="black"
                onPress={() => navigation.navigate("Settings")}
              />
            )
          })}
          component={ColorList}
        />
        <Screen name="Details" component={ColorDetails} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
}
