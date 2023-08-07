import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Button, Modal } from "react-native";
import { createAPI, detail, getAPI } from "../service/ServiceClient";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";




const Detail= () => {
    const [cantidad, setCantidad] = useState("");
    const [fechamedicamento, setFechamedicamento] = useState("");
    const [tiempoadministracion, setTiempoadministracion] = useState("");
    const [mañana, setMañana] = useState("");
    const [tarde, setTarde] = useState("");
    const [noche, setNoche] = useState("");
    const [modalVisible, setModalVisible] = useState(false)
    const [listadoMascotas, setListadoMascotas] = useState([])
   
    


    const navigation = useNavigation();

    const handleSaveData = async () => {
        try {
          const data = {
            amount: cantidad,
            dateMedicament: fechamedicamento,
            administrationTime: tiempoadministracion,
            tomorrow: mañana,
            afternoon: tarde,
            evening: noche,
          };
          console.log("data",data)
          const nuevaMedicina = await createAPI('http://localhost:8081/detail', data)
          // Limpiar los campos después de guardar la mascota
          setNombre("");
          setDescripcion("");
          setFechaexpiracion("");
          
    
          // Lógica adicional después de crear la mascota (si es necesario)
          console.log("Medicina creada:", nuevaMedicina);
        } catch (error) {
          // Manejo de errores en caso de que la solicitud falle
          console.log("Error al crear medicina:", error);
          
        }
      };


      const handleOpenModal = async () => {
        try {
          const listadoTmp = await getAPI('http://localhost:8081/detail')
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
        <Text style={styles.title}>Detalles de la Ficha</Text>
  
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cantidad del medicamento</Text>
            <TextInput
              placeholder="Ingrese la cantidad del medicamento"
              value={cantidad}
              onChangeText={setCantidad}
              style={styles.input}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Fecha del Medicamento</Text>
            <TextInput
              placeholder="Ingrese la fecha que se le dio a la mascota"
              value={fechamedicamento}
              onChangeText={setFechamedicamento}
              style={styles.input}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Fecha de Administracion</Text>
            <TextInput
              placeholder="Ingrese el tiempo de administracion"
              value={tiempoadministracion}
              onChangeText={setTiempoadministracion}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mañana</Text>
            <TextInput
              placeholder="Ingrese el tiempo de dia  de medicacion"
              value={mañana}
              onChangeText={setMañana}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tarde</Text>
            <TextInput
              placeholder="Ingrese el tiempo de dia  de medicacion"
              value={tarde}
              onChangeText={setTarde}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Noche</Text>
            <TextInput
              placeholder="Ingrese el tiempo de dia  de medicacion"
              value={noche}
              onChangeText={setNoche}
              style={styles.input}
            />
          </View>


          <TouchableOpacity style={styles.button} onPress={handleSaveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
            <Text style={styles.buttonText}>Inicio</Text>
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
    <Text style={styles.modalTitle}>Listado de Detalles</Text>
    

      <FlatList
        data={listadoMascotas}
        keyExtractor={(cliente) => cliente.id.toString()}

        renderItem={({ item }) => (
          <View style={styles.containerMap}>
             <Text style={styles.text}>Cantidad: {item.amount}</Text>
                    <Text style={styles.text}>Fecha Medicina: {item.dateMedicament}</Text>
                    <Text style={styles.text}>Tiempo Administracion: {item.administrationTime}</Text>
                    <Text style={styles.text}>Mañana: {item.tmorrow}</Text>
                    <Text style={styles.text}>Tarde: {item.afternoon}</Text>
                    <Text style={styles.text}>Noche: {item.evening}</Text>
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
      
      export default Detail;