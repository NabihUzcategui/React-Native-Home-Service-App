import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import homeScreen from "../screens/HomeScreen/homeScreen";

const Tab = createBottomTabNavigator();

export default function tabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Booking" component={homeScreen} />
      <Tab.Screen name="Profile" component={homeScreen} />
    </Tab.Navigator>
  );
}
