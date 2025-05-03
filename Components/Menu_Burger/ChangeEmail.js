import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, useWindowDimensions } from 'react-native';
import { supabase } from '../../DB/supabase';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChangeEmail = () => {
    const { width } = useWindowDimensions();
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const isValidEmail = (email) => {
        const emailDomainRegex = /@(alumnos\.udg\.mx|academicos\.udg\.mx)$/;
        return emailDomainRegex.test(email);
    };

    const handleChangeEmail = async () => {
        if (!isValidEmail(currentEmail) || !isValidEmail(newEmail)) {
            Alert.alert('Error', 'Ambos correos deben terminar en @alumnos.udg.mx o @academicos.udg.mx');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('email')
                .eq('email', currentEmail)
                .single();
            if (error || !data) {
                Alert.alert('Error', 'Correo actual no encontrado');
                return;
            }

            const { error: updateError } = await supabase
                .from('usuarios')
                .update({
                    email: newEmail,
                    updated_at: new Date().toISOString(),
                })
                .eq('email', currentEmail);

            if (updateError) {
                Alert.alert('Error', 'No se pudo actualizar el correo');
                console.error(updateError);
            } else {
                Alert.alert('Éxito', 'Correo actualizado correctamente');
                setCurrentEmail('');
                setNewEmail('');
            }
        } catch (error) {
            Alert.alert('Error', 'Ocurrió un error inesperado');
            console.error(error);
        }
    };

    return (
        <View style={[styles.container, { paddingHorizontal: width * 0.1 }]}>
            <View style={styles.card}>
                <Text style={styles.title}>Cambiar Correo</Text>

                <View style={styles.inputContainer}>
                    <Icon name="email" size={20} color="#999" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Actual"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={currentEmail}
                        onChangeText={setCurrentEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="alternate-email" size={20} color="#999" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nuevo Correo"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={newEmail}
                        onChangeText={setNewEmail}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleChangeEmail}>
                    <Text style={styles.buttonText}>Actualizar Correo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#faebe0',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 26,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#963f00',
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

export default ChangeEmail;
