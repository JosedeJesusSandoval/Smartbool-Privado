import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import * as Crypto from 'expo-crypto';
import { supabase } from '../../DB/supabase';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChangePassword = () => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const isValidEmail = (email) => {
    const emailDomainRegex = /@(alumnos\.udg\.mx|academicos\.udg\.mx)$/;
    return emailDomainRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).+$/;
    return passwordRegex.test(password);
  };

  const handleChangePassword = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'El correo debe terminar en @alumnos.udg.mx o @academicos.udg.mx');
      return;
    }

    if (!newPassword) {
      Alert.alert('Error', 'La nueva contraseña no puede estar vacía');
      return;
    }

    if (!isValidPassword(newPassword)) {
      Alert.alert('Error', 'La contraseña debe contener al menos una letra mayúscula y un carácter especial');
      return;
    }

    try {
      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        newPassword
      );

      const { data, error } = await supabase
        .from('usuarios')
        .select('email')
        .eq('email', email)
        .single();

      if (error || !data) {
        Alert.alert('Error', 'Correo no encontrado');
        return;
      }

      const { updateError } = await supabase
        .from('usuarios')
        .update({
          password_hash: hashedPassword,
          updated_at: new Date().toISOString()
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { paddingHorizontal: width * 0.1 }]}
    >
      <View style={styles.card}>
        <Text style={styles.title}>🔒 Cambiar Contraseña</Text>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo institucional"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon name="key" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Actualizar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebe0',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    color: '#963f00',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
},
button: {
  paddingVertical: 14,
  backgroundColor: '#b04f09',
  borderRadius: 12,
  alignItems: 'center',
  marginVertical: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 17,
},
inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#f9f9f9',
        marginBottom: 16,
        paddingHorizontal: 12,
    },  
    icon: {
        marginRight: 8,
    },
    
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
    },
});

export default ChangePassword;
