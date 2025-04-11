import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const RegistroDiagramaLogico = () => {
  const [imagen, setImagen] = useState(null);

  const handleRegistro = () => {
    if (imagen) {
      Alert.alert(
        'Comienzo de la predicción',
        'La imagen será analizada ha registrado la imagen del diagrama lógico!',
      );
      console.log({ imagen });
    } else {
      Alert.alert('Error', 'Por favor selecciona una imagen.');
    }
  };

  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permiso.granted) {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!resultado.canceled) {
        setImagen(resultado.assets[0].uri);
      }
    } else {
      Alert.alert('Permiso Denegado', 'Se necesita acceso a tu galería para seleccionar una imagen.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImg}>
        <View style={styles.gateContainerImg}>
          <Text style={styles.gateName}>Registro de Diagrama Lógico</Text>

          <Text style={styles.placeholderText}>Selecciona una foto de un diagrama lógico que sea .JPG o PNG</Text>

          {imagen ? (
            <Image source={{ uri: imagen }} style={styles.gateImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>No hay imagen seleccionada</Text>
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={seleccionarImagen}>
            <Text style={styles.buttonText}>Seleccionar Imagen  <Ionicons name="images" size={24} color= 'white' /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegistro}>
            <Text style={styles.buttonText}>Predecir  <Ionicons name="analytics" size={24} color= 'white' /></Text>
          </TouchableOpacity>

          {imagen && (
            <TouchableOpacity style={styles.buttonBorrar} onPress={() => setImagen(null)}>
              <Text style={styles.buttonText}>Borrar <Ionicons name="trash" size={24} color= 'white' /></Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  gateContainerImg: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    shadowColor: '#a3b1c6',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  gateName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  gateImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonBorrar: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistroDiagramaLogico;