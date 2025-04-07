import React, { useState } from 'react';
import { Button, Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  gateContainerImg: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white', // Fondo más suave para el neumorfismo
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#fff', // Sombra clara
    shadowOffset: { width: -5, height: -5 }, // Sombra clara en la esquina superior izquierda
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    borderColor: '#e0e0e0', // Borde para un efecto más suave
    borderWidth: 1,
    // Sombra oscura
    shadowColor: '#a3b1c6', // Sombra oscura
    shadowOffset: { width: 5, height: 5 }, // Sombra oscura en la esquina inferior derecha
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  gateName: {
    fontSize: 18,
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
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 200,
    height: 200,
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

const LogicGatesApp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de la imagen');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setSelectedImage(source);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.containerImg}>
      <View style={styles.gateContainerImg}>
        <Text style={styles.gateName}>Selecciona una imagen</Text>
        {selectedImage ? (
          <Image source={selectedImage} style={styles.gateImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>PNG</Text>
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={openImagePicker}>
          <Text style={styles.buttonText}>
            {selectedImage ? 'Predecir ✨' : 'Seleccionar una imagen ✨'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBorrar} onPress={openImagePicker}>
          <Text style={styles.buttonText}>
            eliminar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LogicGatesApp;