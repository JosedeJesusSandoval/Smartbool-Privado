import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Estilos';


const usuario = {
  datoUsuario: [
    { id: '001', fecha: '15/01/2024', imagen: require('../assets/DL1.png') },
    { id: '002', fecha: '10/01/2024', imagen: require('../assets/DL2.png') },
    { id: '003', fecha: '05/01/2024', imagen: require('../assets/DL3.png') },
    { id: '004', fecha: '13/05/2024', imagen: require('../assets/DL1.png') },
  ],
};

// Un componente que muestra un solo datos del usuario con su id, fecha, total y estado
class Datos extends Component {
  render() {
    const { id, fecha, imagen, onEditar, onEliminar } = this.props;

    return (
      <View style={styles.datosCard}>
        <Image source={imagen} style={styles.imagenCard} />
        <Text style={styles.cardFecha}>📅 {fecha}</Text>
        <View style={styles.botonesCardContainer}>
          <TouchableOpacity style={styles.botonEditarNuevo} onPress={onEditar}>
            <Text style={styles.textoBotonNuevo}>✏️ Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonEliminarNuevo} onPress={onEliminar}>
            <Text style={styles.textoBotonNuevo}>🗑️ Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Un componente que muestra la cuenta del usuario con sus datos, cupones y datoUsuario
class Cuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datoUsuario: usuario.datoUsuario,
    };
  }
  
  handleEditar = (id) => {
    console.log(`Editar datos con id: ${id}`);
    // Aquí se puede implementar la lógica para editar el datos
  };

  handleEliminar = (id) => {
    console.log(`Eliminar datos con id: ${id}`);
    // Filtra los datoUsuario para eliminar el datos con el id correspondiente
    const nuevosdatoUsuario = this.state.datoUsuario.filter(datos => datos.id !== id);
    this.setState({ datoUsuario: nuevosdatoUsuario });
  };

  render() {
    const { datoUsuario } = this.state;

    // Si no hay datoUsuario, muestra un mensaje y una imagen
    if (datoUsuario.length === 0) {
      return (
        <View style={styles.sindatoUsuario}>
          <Image 
            source={require('../assets/no_datos.png')} // Asegúrate de tener esta imagen en tu proyecto  
            style={styles.imagenSindatoUsuario}
          />
          <Text style={styles.textoSindatoUsuario}>Datos no disponibles</Text>
        </View>
      );
    }

    // Un array que contiene los componentes de datoUsuario
    const datoUsuarioComponents = datoUsuario.map((datos, i) => (
      <Datos
        key={i}
        id={datos.id}
        fecha={datos.fecha}
        imagen={datos.imagen}
        onEditar={() => this.handleEditar(datos.id)}
        onEliminar={() => this.handleEliminar(datos.id)}
      />
    ));

    // Se retorna la cuenta con todos los componentes
    return (
      <ScrollView style={styles.cuenta}>
        <Text style={styles.title}>Historial</Text>
        {datoUsuarioComponents}
      </ScrollView>
    );
  }
}

// Un componente principal que muestra la cuenta
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuenta />
      </View>
    );
  }
}



