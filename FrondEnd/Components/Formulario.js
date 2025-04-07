/* 
- que en la imagen sea la compuerta lógica y el 
 temas:
 + compuertas lógicas
 + algebra de boole
 + leyes conmutativas
 + leyes asociativas
 + leyes distribuidas
 + regla de algebra de boole
 + ley distribuida
 + no es lo mismo este con este (o sea las negaciones)
- picker
*/

import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import styles from './Estilos.js';

const LogicGatesApp = () => {
  const logicGates = [
    {
      name: 'AND',
      image: require('../assets/AND.png'),
      formula: 'A * B',
      truthTable: [
        { A: 0, B: 0, Output: 0 },
        { A: 0, B: 1, Output: 0 },
        { A: 1, B: 0, Output: 0 },
        { A: 1, B: 1, Output: 1 },
      ],
      circuito: require('../assets/AND_cir.png'),
    },
    {
      name: 'NAND',
      image: require('../assets/NAND.png'),
      formula: '¬(A * B)',
      truthTable: [
        { A: 0, B: 0, Output: 1 },
        { A: 0, B: 1, Output: 1 },
        { A: 1, B: 0, Output: 1 },
        { A: 1, B: 1, Output: 0 },
      ],
      circuito: require('../assets/AND_cir.png'),
    },
    {
      name: 'OR',
      image: require('../assets/OR.png'),
      formula: 'A + B',
      truthTable: [
        { A: 0, B: 0, Output: 0 },
        { A: 0, B: 1, Output: 1 },
        { A: 1, B: 0, Output: 1 },
        { A: 1, B: 1, Output: 1 },
      ],
      circuito: require('../assets/AND_cir.png'),
    },
    {
      name: 'NOR',
      image: require('../assets/NOR.png'),
      formula: '¬(A + B)',
      truthTable: [
        { A: 0, B: 0, Output: 1 },
        { A: 0, B: 1, Output: 0 },
        { A: 1, B: 0, Output: 0 },
        { A: 1, B: 1, Output: 0 },
      ],
      circuito: require('../assets/AND_cir.png'),
    },
    {
      name: 'NOT',
      image: require('../assets/NOT.png'),
      formula: '¬A',
      truthTable: [
        { A: 0, Output: 1 },
        { A: 1, Output: 0 },
      ],
      circuito: require('../assets/NOT.png'),
    },
    {
      name: 'XOR',
      image: require('../assets/XOR.png'),
      formula: 'A ⊕ B',
      truthTable: [
        { A: 0, B: 0, Output: 0 },
        { A: 0, B: 1, Output: 1 },
        { A: 1, B: 0, Output: 1 },
        { A: 1, B: 1, Output: 0 },
      ],
      circuito: require('../assets/XOR.png'),
    },
    {
      name: 'XNOR',
      image: require('../assets/XNOR.png'),
      formula: '¬(A ⊕ B)',
      truthTable: [
        { A: 0, B: 0, Output: 1 },
        { A: 0, B: 1, Output: 0 },
        { A: 1, B: 0, Output: 0 },
        { A: 1, B: 1, Output: 1 },
      ],
      circuito: require('../assets/XNOR.png'),
    },
/*


  const booleanFormulas = [
    { id: 1, formula: 'A + 0 = A' },
    { id: 2, formula: 'A + 1 = 1' },
    { id: 3, formula: 'A * 0 = 0' },
    { id: 4, formula: 'A * 1 = A' },
    { id: 5, formula: 'A + A = A' },
    { id: 6, formula: 'A * A = A' },
    { id: 7, formula: '¬(¬A) = A' },
    { id: 8, formula: 'A + ¬A = 1' },
    { id: 9, formula: 'A * ¬A = 0' },
    { id: 10, formula: 'A + B = B + A' },
    { id: 11, formula: 'A * B = B * A' },
    { id: 12, formula: 'A + (B + C) = (A + B) + C' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Picker
        selectedValue={selectedOption}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}>
        <Picker.Item label="Compuertas Lógicas" value="logicGates" />
        <Picker.Item label="Fórmulas de Boole" value="booleanFormulas" />
        <Picker.Item label="Fórmulas de Boole" value="booleanFormulas" />
      </Picker>

      {selectedOption === 'logicGates'
        ? logicGates.map((gate, index) => (
            <View key={index} style={styles.gateContainer}>
              <Text style={styles.gateName}>{gate.name}</Text>
              <Image style={styles.gateImage} source={gate.image} />
              <Text style={styles.gateFormula}>Fórmula: {gate.formula}</Text>
              <Text style={styles.truthTableHeader}>Tabla de Verdad:</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  {Object.keys(gate.truthTable[0]).map((key, i) => (
                    <Text key={i} style={styles.tableHeader}>
                      {key}
                    </Text>
                  ))}
                </View>
                {gate.truthTable.map((row, rowIndex) => (
                  <View key={rowIndex} style={styles.tableRow}>
                    {Object.values(row).map((value, colIndex) => (
                      <Text key={colIndex} style={styles.tableCell}>
                        {value}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
              <Text style={styles.truthTableHeader}>Circuito:</Text>
              <Image style={styles.gateImage} source={gate.circuito} />
            </View>
          ))
        : booleanFormulas.map((formula) => (
            <View key={formula.id} style={styles.formulaContainer}>
              <Text style={styles.formulaText}>{formula.formula}</Text>
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
    backgroundColor: 'white',
  },
  picker: {
    width: '80%',
    marginBottom: 20,
  },
  gateContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  gateName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gateImage: {
    height: 150,
    resizeMode: 'contain',
    margin: 10,
  },
  gateFormula: {
    fontSize: 18,
    marginBottom: 10,
  },
  truthTableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    flex: 1,
    paddingHorizontal: '8%',
    paddingVertical: '3%',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#000',
  },
  formulaContainer: {
    marginBottom: 10,
  },
  formulaText: {
    fontSize: 18,
  },
});

export default LogicGatesApp;


 */
  ];

  return (
    <ScrollView contentContainerStyle={styles.containerFormulario}>
      {logicGates.map((gate, index) => (
        <View key={index} style={styles.gateContainerFormulario}>
        
          <Text style={styles.gateNameFormulario}>{gate.name}</Text>
          <Image style={styles.gateImage} source={gate.image} />
          <Text style={styles.gateFormula}>Fórmula: {gate.formula}</Text>
          <Text style={styles.truthTableHeader}>Tabla de Verdad:</Text>
          <View style={styles.table}>
            {/* Encabezados de la tabla */}
            <View style={styles.tableRow}>
              {Object.keys(gate.truthTable[0]).map((key, i) => (
                <Text key={i} style={styles.tableHeader}>
                  {key}
                </Text>
              ))}
            </View>
            {/* Filas de la tabla */}
            {gate.truthTable.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {Object.values(row).map((value, colIndex) => (
                  <Text key={colIndex} style={styles.tableCell}>
                    {value}
                  </Text>
                ))}
              </View>
            ))}
          </View>
          <Text style={styles.truthTableHeader}>Circuito:</Text>
          <Image style={styles.gateImage} source={gate.circuito} />
        </View>
      ))}
    </ScrollView>
  );
};

export default LogicGatesApp;