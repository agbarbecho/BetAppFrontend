import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Client from "./screens/Client";
import Pet from "./screens/Pet";
import Vet from "./screens/Vet";
import Profiles from "./screens/Profiles"; // Agrega la importación de la pantalla Profiles
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa el Stack Navigator

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Crea el Stack Navigator

function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="Vet" component={Vet} />
      <Stack.Screen name="Client" component={Client} />
      <Stack.Screen name="Pet" component={Pet} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Vet" // Cambia esto para que inicie en ProfileScreen
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Vet") {
            iconName = focused ? "md-medical" : "md-medical-outline";
          } else if (route.name === "Client") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Pet") {
            iconName = focused ? "paw" : "paw-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ffffff",
        inactiveTintColor: "#ffffff",
        style: {
          backgroundColor: "#45b6b1",
        },
        tabStyle: {
          backgroundColor: "#45b6b1",
        },
      }}
    >
      <Tab.Screen name="Vet" component={Vet} /> 
      <Tab.Screen name="Client" component={Client} />
      <Tab.Screen name="Pet" component={Pet} />
      <Tab.Screen name="Profiles" component={Profiles} /> 
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