import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, useWindowDimensions } from 'react-native';
import { supabase } from '../../DB/supabase';

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
            const { data, error } =await supabase
                .from('usuarios')
                .select('email')
                .eq('email', currentEmail)
                .single(); 
            if ( error || !data) {
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
            }else{
                Alert.alert('Exito', 'Correo actualizado correctamente');
                setCurrentEmail('');
                setNewEmail('');
            }
        }catch (error) {
            Alert.alert('Error', 'Ocurrió un error inesperado');
            console.error(error);
        }
    };

    return (
        <View style={[styles.container, { paddingHorizontal: width * 0.1 }]}>
        <Text style={styles.title}>Cambiar Correo</Text>

        <TextInput
            style={styles.input}
            placeholder="Correo Actual"
            autoCapitalize="none"
            keyboardType="email-address"
            value={currentEmail}
            onChangeText={setCurrentEmail}
        />

        <TextInput
            style={styles.input}
            placeholder="Nuevo Correo"
            autoCapitalize="none"
            keyboardType="email-address"
            value={newEmail}
            onChangeText={setNewEmail}
        />

        <Button title="Actualizar Correo" onPress={handleChangeEmail} />
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

export default ChangeEmail;