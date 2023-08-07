import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button, Modal, ScrollView, Dimensions} from "react-native";
import { createAPI, file, getAPI } from "../service/ServiceClient";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";


const { width } = Dimensions.get('window');
const File= () => {
    const [fechaingreso, setFecha] = useState("");
    const [peso, setPeso] = useState("");
    const [diagnostico, setDiagnostico] = useState("");
    const [examen, setExamen] = useState("");
    const [fechaalta, setFechaalta] = useState("");
    const [modalVisible, setModalVisible] = useState(false)
    const [listadoMascotas, setListadoMascotas] = useState([])



    const navigation = useNavigation();

    
    const handleSaveData = async () => {
        try {
          const data = {
            admissionDate: fechaingreso,
            weight: peso,
            diagnostic: diagnostico,
            exams: examen,
            dischargeDate: fechaalta,
          };
          console.log("data",data)



          const nuevaFicha = await createAPI('http://localhost:8081/file', data)
          // Limpiar los campos después de guardar la mascota
          setFecha("");
          setPeso("");
          setDiagnostico("");
          setExamen("");
          setFechaalta("");
          
    
          // Lógica adicional después de crear la mascota (si es necesario)
          console.log("Ficha creada:", nuevaFicha);
        } catch (error) {
          // Manejo de errores en caso de que la solicitud falle
          console.log("Error al crear ficha medica:", error);
          
        }
      };

      const handleOpenModal = async () => {
        try {
          const listadoTmp = await getAPI('http://localhost:8081/file')
          listadoTmp.push(listadoTmp[0])
          listadoTmp.push(listadoTmp[0])
          
          setListadoMascotas(listadoTmp)
        } catch (error) {
          console.log("Error al recuperar listado:", error);
          console.log("r", error.message)
    
        }
        setModalVisible(true);
      }








    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Image source={require("../assets/Logo.jpg")} style={styles.logo} />
            <Button
        onPress={handleOpenModal}
        title="Ver listado"
        />
          <Text style={styles.title}>Datos Ficha</Text>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Fecha de Ingreso</Text>
            <TextInput
              placeholder="Ingrese la fecha de ingreso"
              value={fechaingreso}
              onChangeText={setFecha}
              style={styles.input}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Peso</Text>
            <TextInput
              placeholder="Ingrese el peso"
              value={peso}
              onChangeText={setPeso}
              style={styles.input}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Diagnostico</Text>
            <TextInput
              placeholder="Ingrese el diagnostico"
              value={diagnostico}
              onChangeText={setDiagnostico}
              style={styles.input}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Examen</Text>
            <TextInput
              placeholder="Ingrese el examen"
              value={examen}
              onChangeText={setExamen}
              style={styles.input}
             
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Fecha de alta</Text>
            <TextInput
              placeholder="Ingrese la fecha de alta"
              value={fechaalta}
              onChangeText={setFechaalta}
              style={styles.input}
             
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSaveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
         
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Medicine')}>
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
            <Text style={styles.modalTitle}>Listado de Fichas</Text>
            

              <FlatList
                data={listadoMascotas}
                keyExtractor={(cliente) => cliente.id.toString()}

                renderItem={({ item }) => (
                  <View style={styles.containerMap}>
                     <Text style={styles.text}>Fecha Ingreso: {item.admissionDate}</Text>
                    <Text style={styles.text}>Peso: {item.weight}</Text>
                    <Text style={styles.text}>Diagnostico: {item.diagnostic}</Text>
                    <Text style={styles.text}>Examenes: {item.exams}</Text>
                    <Text style={styles.text}>Fecha Alta: {item.dischargeDate}</Text>
                    <Text style={styles.text}>Mascota ID: {item.petId}</Text>
                    <Text style={styles.text}>Veterinario ID: {item.vetId}</Text>

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
    </ScrollView>
  );
};
   
        
    
    
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
    
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20, 
  },
      
  });
    export default File;