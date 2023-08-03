import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { createAPI, vet } from "../service/ServiceClient";

const Vet = () => {  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const handleSaveData = async () => {

    try {
      const data = {
        nombre: nombre,
        apellido: apellido,
      
      };
      await createAPI(vet,data);
       // Limpiar los campos después de guardar la mascota
    setNombre("");
    setApellido("");
    // Lógica adicional después de crear la mascota (si es necesario)
    console.log("Veterinario de atencion a mascota  creado:", data);
  } catch (error) {
    // Manejo de errores en caso de que la solicitud falle
    console.log("Error al crear perfil del veterinario:", error);
  }
  
};
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
        
      <TouchableOpacity style={styles.button} onPress={handleSaveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

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
  button: {
    backgroundColor: "#E6C627",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Vet;
