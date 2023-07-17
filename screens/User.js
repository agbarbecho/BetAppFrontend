import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const User = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar datos Usuario</Text>

            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />

            <TextInput
                placeholder="Apellido"
                value={apellido}
                onChangeText={setApellido}
                style={styles.input}
            />

            <TextInput
                placeholder="Direccion"
                value={direccion}
                onChangeText={setDireccion}
                style={styles.input}
            />

            <TextInput
                placeholder="Telefono"
                value={telefono}
                onChangeText={setTelefono}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '80%',
        fontSize: 16,
    },
});

export default User;