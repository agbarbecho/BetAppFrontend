import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

const Vet = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  return (
    <View style={styles.container}>
        <Image source={require("../assets/Logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Ingrese datos Veterinario</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre</Text>
        <TextInput
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Apellido</Text>
        <TextInput
          placeholder="Ingrese su apellido"
          value={apellido}
          onChangeText={setApellido}
          style={styles.input}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width:250,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E6C627',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default Vet;
