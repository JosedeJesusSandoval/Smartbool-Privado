import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Picker } from 'react-native';

const Settings = ({ navigation }) => {
  const [language, setLanguage] = useState('es'); // Estado para el idioma

  const ChangePassword = () => {
    navigation.navigate('Cambiar Contraseña'); // Asegúrate de usar el nombre correcto
  };

  const clearHistory = () => {
    Alert.alert('Historial Limpio', 'Se ha eliminado el historial.');
  };

  const changeEmail = () => {
    Alert.alert('Cambiar Correo', 'Función para cambiar el correo.');
  };

  const logout = () => {
    Alert.alert('Cerrar Sesión', 'Has cerrado sesión correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Selector de idioma */}
      <Text style={styles.label}>Seleccionar Idioma</Text>

      {/* Botones de configuración */}
      <TouchableOpacity style={styles.button} onPress={ChangePassword}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={clearHistory}>
        <Text style={styles.buttonText}>Limpiar Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={changeEmail}>
        <Text style={styles.buttonText}>Cambiar Correo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;