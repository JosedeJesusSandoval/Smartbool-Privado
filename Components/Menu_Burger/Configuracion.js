import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Pressable } from 'react-native';
import { supabase } from '../../DB/supabase';

const Settings = ({ usuario, navigation }) => {

  if (!usuario) {
    return <Text>Esperando usuario...</Text>;
  }

  const ChangePassword = () => {
    navigation.navigate('Cambiar Contraseña');
  };

  const clearHistory = async () => {
    if (!usuario?.id) {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configuración</Text>

      <Text style={styles.label}>Idioma actual: Español</Text>

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={ChangePassword}>
        <Text style={styles.buttonText}>🔐 Cambiar Contraseña</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={clearHistory}>
        <Text style={styles.buttonText}>🗑️ Limpiar Historial</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={ChangeEmail}>
        <Text style={styles.buttonText}>✉️ Cambiar Correo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#faebe0',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#963f00',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    paddingVertical: 16,
    backgroundColor: '#b04f09',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Settings;
