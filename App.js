import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import Settings from "./components/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ColorProvider } from "./hooks";

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreens = () => (
  <Navigator>
    <Screen
      name="Home"
      options={{ title: "Color List" }}
      component={ColorList}
    />
    <Screen name="Details" component={ColorDetails} />
  </Navigator>
);

export default function App() {
  return (
    <ColorProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={MainScreens} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ColorProvider>
  );
}
