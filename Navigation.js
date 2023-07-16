import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import User from "./screens/User";
import Pet from "./screens/Pet";
import Vet from "./screens/Vet";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Vet"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Vet") {
            iconName = focused ? "md-medical" : "md-medical-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Pet") { 
            iconName = focused ? "paw" : "paw-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#54ccd4',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Vet" component={Vet} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Pet" component={Pet} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}