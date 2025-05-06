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
        Smartboole es un proyecto que busca ayudar a los usuarios a resolver sus problemas con los cicuitos logicos,{"\n"}
        realizando el analisis de los mismos con la ayuda de las redes convolucionales
      </Text>

      <Text style={styles.credits_title}>
      Desarrolladores de la App
      </Text>
      <Text style={styles.credits}>
        Sandoval Ruiz Jóse de Jesús {"\n"}
        Esteban Fabian Ramirez Gonzalez
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#faebe0',
  },
  image: {
    width: "80%",
    height: "40%",
    resizeMode: 'contain',
    borderRadius:180,
    marginTop: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    color: '#963f00',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  credits_title:{
    fontSize: 25,
    color: '#963f00',
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  credits: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});

export default AboutUs;