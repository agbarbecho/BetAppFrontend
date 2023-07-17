import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Pet = () => {
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');
    const [especie, setEspecie] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar datos Mascota</Text>

            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />

            <TextInput
                placeholder="Raza"
                value={raza}
                onChangeText={setRaza}
                style={styles.input}
            />

            <TextInput
                placeholder="Especie"
                value={especie}
                onChangeText={setEspecie}
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

export default Pet;