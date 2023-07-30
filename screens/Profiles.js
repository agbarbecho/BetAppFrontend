import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getAPIVet, getAPIPet, getAPIClient } from '../service/ServiceVet';

const Profiles = () => {
  const [profileData, setProfileData] = useState({}); // Inicializar como un objeto vacío {}

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const vetData = await getAPIVet('http://localhost:8081/vet');
      const clientData = await getAPIClient('http://localhost:8081/client');
      const petData = await getAPIPet('http://localhost:8081/pet');

      const profileData = {
        vet: vetData.length > 0 ? vetData[0] : {},
        client: clientData.length > 0 ? clientData[0] : {},
        pet: petData.length > 0 ? petData[0] : {},
      };

      setProfileData(profileData);
    } catch (error) {
      console.log('Error al obtener los datos del perfil:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.title}>Perfil del Veterinario</Text>
        <Text>Nombre: {profileData.vet.nombre}</Text>
        <Text>Apellido: {profileData.vet.apellido}</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.title}>Perfil del Cliente</Text>
        <Text>Nombre: {profileData.client.nombre}</Text>
        <Text>Apellido: {profileData.client.apellido}</Text>
        <Text>Dirección: {profileData.client.direccion}</Text>
        <Text>Teléfono: {profileData.client.telefono}</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.title}>Perfil de la Mascota</Text>
        <Text>Nombre: {profileData.pet.nombre}</Text>
        <Text>Raza: {profileData.pet.raza}</Text>
        <Text>Especie: {profileData.pet.especie}</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfiles</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#45b6b1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Profiles;