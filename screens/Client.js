import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { createAPI, client } from "../service/ServiceClient";

const Client= () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
 

    const handleSaveData = async () => {
      try {
        const data = {       
          name: nombre,
          lastname: apellido,
          address: direccion,
          phone: telefono,
        };
        const nuevoCliente = await createAPI('http://localhost:8081/client', data)
         // Limpiar los campos después de guardar la mascota
      setNombre("");
      setApellido("");
      setDireccion("");
      setTelefono("");
 
      // Lógica adicional después de crear la mascota (si es necesario)
      console.log("Cliente creado:", nuevoCliente);
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.log("Error al crear perfil del client:", error);
      console.log(error.mesage)
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require("../assets/Logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Datos del Cliente</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre</Text>
        <TextInput
          placeholder="Ingrese el nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Apellido</Text>
        <TextInput
          placeholder="Ingrese el apellido"
          value={apellido}
          onChangeText={setApellido}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Dirección</Text>
        <TextInput
          placeholder="Ingrese la dirección"
          value={direccion}
          onChangeText={setDireccion}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Teléfono</Text>
        <TextInput
          placeholder="Ingrese el numero de teléfono"
          value={telefono}
          onChangeText={setTelefono}
          style={styles.input}
         
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSaveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
    width: "80%",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E6C627",
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


export default Client;