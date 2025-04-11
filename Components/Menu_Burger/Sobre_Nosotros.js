import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const participantes = ['Papiro389', 'Migue', 'JosedeJesusSandoval']; //ingresa tu cuenta de github para poner tus creditos 
const listItems = participantes.map((participantes) =>
  <li>{participantes}</li>
);

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/smarty_sobreNosotros.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Text style={styles.description}>
        Smartboole es un proyecto desarrollado en el laboratorio de Inventores
      </Text>

      <Text style={styles.credits}>
        Créditos:
      </Text>
      <Text style={styles.credits}>
        - Desarrolladora de redes neuronales: 
      </Text>
      <Text style={styles.credits}>
        - Desarrollador de la base de datos: 
      </Text>
      <Text style={styles.credits}>
        - Desarrolladora de la App: 
      </Text>
      <Text style={styles.credits}>
        gracias a nuestros encargados por darnos la oportunidad de desarrollar este proyecto
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: "80%",
    height: "50%",
    //borderRadius: 75,
    //zoom: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  credits: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
  },
});

export default AboutUs;