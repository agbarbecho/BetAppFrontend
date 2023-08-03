import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable"; // Importa la biblioteca Animatable

import Client from "../screens/Client";
import Vet from "../screens/Vet";
import Pet from "../screens/Pet";

const Menu = () => {
  const [selectedScreen, setSelectedScreen] = useState("Client");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionClick = (screen) => {
    setSelectedScreen(screen);
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>

      {/* Animacion de menu sheesh */}
      <Animatable.View
        animation={isMenuOpen ? "slideInLeft" : "slideOutLeft"}
        duration={400}
        style={[styles.menu, isMenuOpen && styles.menuOpen]}
      >
        <TouchableOpacity
          onPress={() => handleMenuOptionClick("Client")}
          style={styles.menuItem}
        >
          <Text>Client</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleMenuOptionClick("Vet")}
          style={styles.menuItem}
        >
          <Text>Vet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleMenuOptionClick("Pet")}
          style={styles.menuItem}
        >
          <Text>Pet</Text>
        </TouchableOpacity>
      </Animatable.View>


      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Text style={styles.menuIconText}>☰</Text>
      </TouchableOpacity>

    
      {selectedScreen === "Client" && <Client />}
      {selectedScreen === "Vet" && <Vet />}
      {selectedScreen === "Pet" && <Pet />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    position: "absolute",
    top: 50,
    left: 10,
    padding: 10,
    zIndex: 2,

    borderRadius: 5,
  },
  menuIconText: {
    fontSize: 40, 
  },
  menu: {
    position: "absolute",
    top: 100,
    left: -200,
    width: 150,
    backgroundColor: "#1ec1ba",
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  menuOpen: {
    left: 10,
  },
  menuItem: {
    padding: 10,
  },
});

export default Menu;