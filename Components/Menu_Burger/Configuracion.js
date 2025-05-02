import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { supabase } from '../../DB/supabase'; // Asegúrate de que esta ruta sea correcta
import ChangeEmail from './ChangeEmail';

const Settings = ({ usuario, navigation }) => {

  // Muestra un mensaje si no se encuentra 'usuario'
  if (!usuario) {
    return <Text>Esperando usuario...</Text>;
  }

  const ChangePassword = () => {
    navigation.navigate('Cambiar Contraseña');
  };

  const clearHistory = async () => {
    if (!usuario || !usuario.id) {
      Alert.alert('Error', 'No se encontró el ID del usuario.');
      return;
    }

    const { error: deleteError } = await supabase
      .from('historial')
      .delete()
      .eq('user_id', usuario.id);

    if (deleteError) {
      Alert.alert('Error', 'No se pudo eliminar el historial.');
      console.error(deleteError);
    } else {
      Alert.alert('Historial Limpio', 'Se ha eliminado el historial correctamente.');
    }
  };

  const ChangeEmail = () => {
    navigation.navigate('Cambiar Correo');
  };

  const logout = () => {
    Alert.alert('Cerrar Sesión', 'Has cerrado sesión correctamente.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <Text style={styles.label}>Seleccionar Idioma</Text>

      <TouchableOpacity style={styles.button} onPress={ChangePassword}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={clearHistory}>
        <Text style={styles.buttonText}>Limpiar Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ChangeEmail}>
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
