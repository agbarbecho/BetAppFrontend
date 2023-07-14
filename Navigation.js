import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import User from "./screens/User";
import Pet from "./screens/Pet";
import Vet from "./screens/Vet";




const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Vet"
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}>
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
    )
}
