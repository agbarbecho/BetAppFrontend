import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Button, Modal, ScrollView } from "react-native";
import { getAPI } from "../service/ServiceClient";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";


const Inicio = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [listadoMascotas, setListadoMascotas] = useState([])
    

    const navigation = useNavigation();

    const handleOpenModal = async () => {
        try {
        const listadoTmp = await getAPI('http://localhost:8081/pet')
          /* listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0]) */
          setListadoMascotas(listadoTmp)
        } catch (error) {
          console.log("Error al recuperar listado:", error);
          console.log("r", error.message)
    
        }
        setModalVisible(true);
      }
    
 

      return (
        <View style={styles.container}>
          <ImageBackground source={require("../assets/fondo.jpg")} style={styles.container}>
            <Text style={styles.title}>Registro de Fichas Medicas Betel</Text>
            <Image source={require("../assets/Logo2.jpg")} style={styles.logo} />
            <Button
              onPress={handleOpenModal}
              title="Ver listado"
            />
    
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Client')}>
              <Text style={styles.buttonText}>Registrar Nueva Ficha</Text>
            </TouchableOpacity>
          </ImageBackground>
    
        




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
            <Text style={styles.modalTitle}>Listado de Mascotas</Text>
            

              <FlatList
                data={listadoMascotas}
                keyExtractor={(mascota) => mascota.id.toString()}

            
                renderItem={({ item }) => (
                  <View style={styles.containerMap}>

<Text style={styles.sectionTitle}>Cliente</Text>
                    <Text style={styles.text}>Nombre: {item.name}</Text>
                    <Text style={styles.text}>Apellido: {item.lastname}</Text>
                    <Text style={styles.text}>Direccion: {item.address}</Text>
                    <Text style={styles.text}>Telefono: {item.phone}</Text>



                    <Text style={styles.sectionTitle}>Mascota</Text>
                    <Text style={styles.text}>Nombre: {item.name}</Text>
                    <Text style={styles.text}>Raza: {item.breed}</Text>
                    <Text style={styles.text}>Especie: {item.species}</Text>
                    <Text style={styles.text}>Cliente ID: {item.clientId}</Text>


                    <Text style={styles.sectionTitle}>Veterinario:</Text>
                    <Text style={styles.text}>Nombre: {item.name}</Text>
                    <Text style={styles.text}>Apellido: {item.lastname}</Text>


                    <Text style={styles.sectionTitle}>Ficha</Text>
                    <Text style={styles.text}>Fecha Ingreso: {item.admissionDate}</Text>
                    <Text style={styles.text}>Peso: {item.weight}</Text>
                    <Text style={styles.text}>Diagnostico: {item.diagnostic}</Text>
                    <Text style={styles.text}>Examenes: {item.exams}</Text>
                    <Text style={styles.text}>Fecha Alta: {item.dischargeDate}</Text>
                    <Text style={styles.text}>Mascota ID: {item.petId}</Text>
                    <Text style={styles.text}>Veterinario ID: {item.vetId}</Text>


                    <Text style={styles.sectionTitle}>Medicamento</Text>
                    <Text style={styles.text}>Nombre Medicina: {item.name}</Text>
                    <Text style={styles.text}>Descripcion: {item.description}</Text>
                    <Text style={styles.text}>Fecha Expiracion: {item.expirationDate}</Text>




                    <Text style={styles.sectionTitle}>Detalles</Text>
                    <Text style={styles.text}>Cantidad: {item.amount}</Text>
                    <Text style={styles.text}>Fecha Medicina: {item.dateMedicament}</Text>
                    <Text style={styles.text}>Tiempo Administracion: {item.administrationTime}</Text>
                    <Text style={styles.text}>Mañana: {item.isTomorrow}</Text>
                    <Text style={styles.text}>Tarde: {item.isAfternoon}</Text>
                    <Text style={styles.text}>Noche: {item.isEvening}</Text>
                    <Text style={styles.text}>Ficha ID: {item.fileId}</Text>
                    <Text style={styles.text}>Medicina ID: {item.medicineId}</Text>



                    
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "bold",
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


export default Inicio;