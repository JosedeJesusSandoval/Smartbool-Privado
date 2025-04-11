import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, useWindowDimensions } from 'react-native';
import * as Crypto from 'expo-crypto';
import { supabase } from '../../DB/supabase';

const ChangePassword = () => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Validación del correo
  const isValidEmail = (email) => {
    const emailDomainRegex = /@(alumnos\.udg\.mx|academicos\.udg\.mx)$/;
    return emailDomainRegex.test(email);
  };

  // Validación de la contraseña
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).+$/;
    return passwordRegex.test(password);
  };

  const handleChangePassword = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'El correo debe terminar en @alumnos.udg.mx o @academicos.udg.mx');
      return;
    }

    if (!isValidPassword(newPassword)) {
      Alert.alert('Error', 'La contraseña debe contener al menos una letra mayúscula y un carácter especial');
      return;
    }

    if (!newPassword) {
      Alert.alert('Error', 'La nueva contraseña no puede estar vacía');
      return;
    }

    try {
      // Genera el hash de la nueva contraseña
      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        newPassword
      );

      // Verifica si el correo existe en la base de datos
      const { data, error } = await supabase
        .from('usuarios')
        .select('email')
        .eq('email', email)
        .single();  // `single()` asegura que solo obtendrás un único registro o null

      if (error || !data) {
        Alert.alert('Error', 'Correo no encontrado');
        return;
      }

      // Si el correo existe, actualiza la contraseña y la fecha de actualización
      const { updateData, updateError } = await supabase
        .from('usuarios')
        .update({
          password_hash: hashedPassword,
          updated_at: new Date().toISOString()  // Usa la fecha actual en formato ISO
        })
        .eq('email', email);

      if (updateError) {
        console.error(updateError);
        Alert.alert('Error', 'No se pudo cambiar la contraseña');
      } else {
        Alert.alert('Éxito', 'Contraseña actualizada correctamente');
        setEmail('');
        setNewPassword('');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Ocurrió un error inesperado');
    }
  };

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.1 }]}>
      <Text style={styles.title}>Cambiar Contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Button title="Actualizar Contraseña" onPress={handleChangePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default ChangePassword;
