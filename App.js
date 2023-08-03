import React, { useState } from "react";
import { View } from "react-native";
import Menu from "./components/Menu";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("Client");

  return (
    <View style={{ flex: 1 }}>
      <Menu selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} />
    </View>
  );
}