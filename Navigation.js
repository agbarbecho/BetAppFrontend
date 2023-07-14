import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import CreateProfile from "./screens/CreateProfile";
import EditProfile from "./screens/EditProfile";
import User from "./screens/User";
import Pet from "./screens/Pet";
import Vet from "./screens/Vet";




const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="User" component={User} />
            <Tab.Screen name="Pet" component={Pet} />
            <Tab.Screen name="Vet" component={Vet} />


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
