import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./screens/Inicio";
import Client from "./screens/Client";
import Vet from "./screens/Vet";
import Pet from "./screens/Pet";
import File from "./screens/File";
import Medicine from "./screens/Medicine";
import Detail from "./screens/Detail";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Inicio} options={{ title: "Inicio" }} />
        <Stack.Screen name="Client" component={Client} options={{ title: "Cliente" }} />
        <Stack.Screen name="Vet" component={Vet} options={{ title: "Veterinario" }} />
        <Stack.Screen name="Pet" component={Pet} options={{ title: "Mascota" }} />
        <Stack.Screen name="File" component={File} options={{ title: "Ficha Médica" }} />
        <Stack.Screen name="Medicine" component={Medicine} options={{ title: "Medicamento" }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: "Detalle Ficha Medica" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;