import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const MapaKarnaugh = () => {
    const secciones = [
    {
        titulo: '¿Qué es un Mapa de Karnaugh?',
        descripcion:
            'Es una herramienta gráfica utilizada para simplificar expresiones booleanas. Reduce el número de compuertas lógicas necesarias al representar los valores de verdad en una tabla visual fácil de agrupar.',
        imagen: require('../../../assets/karnaugh-descripción.png'),
    },
    {
        titulo: 'Mapa de 2 Variables',
        descripcion:
            'Tiene 4 celdas que representan todas las combinaciones posibles de A y B. Es útil para funciones simples.',
        imagen: require('../../../assets/karnaugh-2.png'),
    },
    {
        titulo: 'Mapa de 3 Variables',
        descripcion:
            'Tiene 8 celdas, permitiendo representar expresiones con tres variables (A, B, C). Los valores se organizan siguiendo el orden Gray para facilitar la agrupación.',
        imagen: require('../../../assets/karnaugh-3.png'),
    },
    {
        titulo: 'Mapa de 4 Variables',
        descripcion:
            'Contiene 16 celdas que muestran todas las combinaciones de 4 variables (A, B, C, D). Es muy común en circuitos digitales más complejos.',
        imagen: require('../../../assets/karnaugh-4.png'),
    },
    {
        titulo: 'Agrupaciones y Simplificación',
        descripcion:
            'Se agrupan unos (1s) en bloques de 1, 2, 4 u 8 celdas adyacentes en potencias de 2. El objetivo es minimizar la función booleana combinando términos que difieran en una sola variable.',
        imagen: require('../../../assets/karnaugh-simplificación.png'),
    },
];

return (
    <ScrollView contentContainerStyle={styles.container}>
        {secciones.map((item, index) => (
        <View key={index} style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Image style={styles.imagen} source={item.imagen} />
            <Text style={styles.descripcion}>{item.descripcion}</Text>
        </View>
    ))}
    </ScrollView>
    );
};

const styles = StyleSheet.create({
container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#faebe0',
},
card: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
},
titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#963f00',
    textAlign: 'center',
},
imagen: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
},
descripcion: {
    fontSize: 18,
    textAlign: 'justify',
},
});

export default MapaKarnaugh;
