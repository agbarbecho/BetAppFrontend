import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button, Modal, ScrollView} from "react-native";
import { createAPI, client, getAPI } from "../service/ServiceClient";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";



const Client= () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [modalVisible, setModalVisible] = useState(false)
  const [listadoMascotas, setListadoMascotas] = useState([])
 
  const navigation = useNavigation();
  
    const handleSaveData = async () => {
      try {
        const data = {       
          name: nombre,
          lastname: apellido,
          address: direccion,
          phone: telefono,
        };
        console.log("data",data)
        
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
  const handleOpenModal = async () => {
    try {
      const listadoTmp = await getAPI('http://localhost:8081/client')
      

      setListadoMascotas(listadoTmp)
    } catch (error) {
      console.log("Error al recuperar listado:", error);
      console.log("r", error.message)

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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pet')}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Listado de Clientes</Text>
           
              <FlatList
                data={listadoMascotas}
                keyExtractor={(client) => client.id.toString()}

                renderItem={({ item }) => (
                  <View style={styles.containerMap}>
                    <Text style={styles.text}>Nombre: {item.name}</Text>
                    <Text style={styles.text}>Apellido: {item.lastname}</Text>
                    <Text style={styles.text}>Direccion: {item.address}</Text>
                    <Text style={styles.text}>Telefono: {item.phone}</Text>
                  </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>

            <Button
              onPress={() => {
                setModalVisible(false);
              }}
              title="Cerrar Lista"
            />
          </View>
      
        </ScrollView>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E6C627",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
    
});

export default Client;