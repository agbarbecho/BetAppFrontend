import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./assets/screens/Home";
import CreateProfile from "./assets/screens/CreateProfile";
import EditProfile from "./assets/screens/EditProfile";


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            
            <Tab.Screen
                name="Inicio"
                component={Home}
            />
            <Tab.Screen name="Pets" component={CreateProfile} />


        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />

        </NavigationContainer>
    )
}