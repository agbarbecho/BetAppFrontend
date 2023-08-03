import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Modal, Button } from "react-native";
import { createAPI, pet, getAPI } from "../service/ServiceClient";

const Pet = () => {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [especie, setEspecie] = useState("");
  const [modalVisible, setModalVisible] = useState(false)
  const [listadoMascotas, setListadoMascotas] = useState([])

  const handleSaveData = async () => {
    try {
      const data = {
        name: nombre,
        breed: raza,
        species: especie,
      };
      const nuevaMascota = await createAPI('http://localhost:8081/pet', data)
      // Limpiar los campos después de guardar la mascota
      setNombre("");
      setRaza("");
      setEspecie("");

      // Lógica adicional después de crear la mascota (si es necesario)
      console.log("Mascota creada:", nuevaMascota);
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.log("Error al crear perfil de la mascota:", error);
    }
  };

  const handleOpenModal = async () => {
    try {
      const listadoTmp = await getAPI('http://localhost:8081/pet')
      setListadoMascotas(listadoTmp)
    } catch (error) {
      console.log("Error al recuperar listado:", error);

    }
    setModalVisible(true);
  }


  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.jpg")} style={styles.logo} />
      <Button
        onPress={handleOpenModal}
        title="Ver listado"
      />
      <Text style={styles.title}>Ingresar datos de la Mascota</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre</Text>
        <TextInput
          placeholder="Ingrese el nombre de la mascota"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Raza</Text>
        <TextInput
          placeholder="Ingrese la raza de la mascota"
          value={raza}
          onChangeText={setRaza}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Especie</Text>
        <TextInput
          placeholder="Ingrese la especie de la mascota"
          value={especie}
          onChangeText={setEspecie}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSaveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>




      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Modal</Text>
            <Text>
              {
                listadoMascotas.map((mascota) =>
                (
                  <View key={mascota.id} style={styles.containerMap}>
                    <Text style={styles.text}>Nombre: {mascota.name}</Text>
                    <Text style={styles.text}>Raza: {mascota.breed}</Text>
                    <Text style={styles.text}>Especie: {mascota.species}</Text>
                    <Text style={styles.text}>Cliente ID: {mascota.clientId}</Text>
                  </View>
                ))
              }
            </Text>
            <Button
              onPress={() => { setModalVisible(false); }}
              title="Cerrar modal"
            />
          </View>
        </View>
      </Modal>

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
    width: 250,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }, containerMap: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    marginBottom: 5,
  },
});

export default Pet;
