import { t } from 'i18next';
import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';


const CompuertasLogicas = () => {

  const logicGates = [
    {
      name: 'AND',
      image: require('../../../assets/AND.png'),
      tituloformula: 'Fórmula:',
      formula: 'A * B',
      titulodescripcion: 'Representación:',
      descripcion: "Se puede representar mediante un circuito que tenga sus interruptores en serie, al tener todos los interruptores activos permite cerrar el circuito y por lo tanto el flujo de la corriente que permite activar el foco(representación).",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-AND-1.png'),
        require('../../../assets/Circuito-AND-2.png'),
        require('../../../assets/Circuito-AND-3.png'),
        require('../../../assets/Circuito-AND-4.png'),

      ],
    },
    {
      name: 'NAND',
      image: require('../../../assets/NAND.png'),
      tituloformula: 'Fórmula:',
      formula: '¬(A * B)',
      titulodescripcion: 'Representación:',
      descripcion: "Se puede representar mediante un circuito que tenga dos interruptores en paralelo, al accionar un interruptor permite cerrar el circuito y por lo tanto el flujo de la corriente.",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-NAND-1.png'),
        require('../../../assets/Circuito-NAND-2.png'),
        require('../../../assets/Circuito-NAND-3.png'),
        require('../../../assets/Circuito-NAND-4.png'),

      ],
    },
    {
      name: 'OR',
      image: require('../../../assets/OR.png'),
      tituloformula: 'Fórmula:',
      formula: 'A + B',
      titulodescripcion: 'Descripción:',
      descripcion: "Se puede representar mediante un circuito que tenga sus interruptores en paralelo, al tener todos los interruptores activos permite cerrar el circuito y por lo tanto el flujo de la corriente que permite activar el foco(representación).",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-OR-1.png'),
        require('../../../assets/Circuito-OR-2.png'),
        require('../../../assets/Circuito-OR-3.png'),
        require('../../../assets/Circuito-OR-4.png'),
      ],
    },
    {
      name: 'NOR',
      image: require('../../../assets/NOR.png'),
      tituloformula: 'Fórmula:',
      formula: '¬(A + B)',
      titulodescripcion: 'Representación:',
      descripcion: "Se puede representar mediante un circuito con los interruptores y salida en paralelo, para tener la salida en estado activo “1” es necesario que ambos interruptores se encuentren abiertos, mientras alguno de los interruptores se encuentre cerrado la salida “y” tendrá un estado binario “0”.",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-NOR-1.png'),
        require('../../../assets/Circuito-NOR-2.png'),
        require('../../../assets/Circuito-NOR-3.png'),
        require('../../../assets/Circuito-NOR-4.png'),
      ],
    },
    {
      name: 'NOT',
      image: require('../../../assets/NOT.png'),
      tituloformula: 'Fórmula:',
      formula: '¬A',
      titulodescripcion: 'Representación:',
      descripcion: "Es posible representar mediante un circuito que tenga los componentes en paralelo. Debemos recordar que el flujo de corriente circula por donde se tenga menor resistencia, por lo tanto, vamos a interpretar que nuestro foco representativo tiene una alta resistencia en comparación a nuestro interruptor.",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-NOT-1.png'),
        require('../../../assets/Circuito-NOT-2.png'),
      ],
    },
    {
      name: 'XOR',
      image: require('../../../assets/XOR.png'),
      tituloformula: 'Fórmula:',
      formula: 'A ⊕ B',
      titulodescripcion: 'Representación:',
      descripcion: "Su representación es mediante cuatro interruptores que se encuentran acoplados mecánicamente a su valor negado, de este modo cuando A se cierra entonces A' se abre y viceversa, lo mismo ocurre con el interruptor B con respecto al B'.",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-XOR-1.png'),
        require('../../../assets/Circuito-XOR-2.png'),
        require('../../../assets/Circuito-XOR-3.png'),
        require('../../../assets/Circuito-XOR-4.png'),
      ],
    },
    {
      name: 'XNOR',
      image: require('../../../assets/XNOR.png'),
      tituloformula: 'Fórmula:',
      formula: '¬(A ⊕ B)',
      titulodescripcion: 'Representación:',
      descripcion: "Su representación es mediante cuatro interruptores que se encuentran acoplados mecánicamente a su valor negado, de este modo cuando A se cierra entonces A' se abre y viceversa, lo mismo ocurre con el interruptor B con respecto al B'. La salida se encuentra en paralelo a los interruptores por lo tanto se debe considerar el flujo de corriente por donde se tenga menor resistencia al paso de la corriente.",
      truthtableheader: 'Circuitos:',
      circuito: [ 
        require('../../../assets/Circuito-XNOR-1.png'),
        require('../../../assets/Circuito-XNOR-2.png'),
        require('../../../assets/Circuito-XNOR-3.png'),
        require('../../../assets/Circuito-XNOR-4.png'),
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.containerFormulario}>
      {logicGates.map((gate, index) => (
        <View key={index} style={styles.gateContainerform}>
          <Text style={styles.gateNameFormulario}>{gate.name}</Text>
          <Image style={styles.gateImage} source={gate.image} />
          <Text style={styles.gateTituloFormula}>{gate.tituloformula}</Text>
          <Text style={styles.gateFormula}>{gate.formula}</Text>
          <Text style={styles.gateTituloDescripcion}>{gate.titulodescripcion}</Text>
          <Text style={styles.gateDescription}>{gate.descripcion}</Text>
          <Text style={styles.truthTableHeader}>{gate.truthtableheader}</Text>
          {gate.circuito && gate.circuito.map((imgSrc, idx) => (
            <Image key={idx} source={imgSrc} />
        ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerFormulario: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#faebe0',
  },
  gateContainerform: {
    width: '90%',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  gateNameFormulario: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#963f00',
  },
  gateImage: {
    width: 300,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  gateTituloFormula: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#963f00',
  },
  gateFormula: {
    fontSize: 30,
    marginBottom: 10,
  },
  gateTituloDescripcion: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#963f00',
  },
  gateDescription: {
    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 10,
  },
  truthTableHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#963f00',
  },
});

export default CompuertasLogicas;