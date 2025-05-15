import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const AlgebraBoole = () => {
  const conceptosBoole = [
    {
      titulo: 'Simplificación de funciones booleanas',
      imagen: require('../../../assets/Leyes-Booleanas.png'),
      descripcion: 'Al usar los teoremas y leyes booleanas, podemos simplificar las expresiones booleanas, mediante las cuales podemos reducir el número requerido de compuertas lógicas a implementar.',

    },
    {
      titulo: 'Ley de Identidad',
      imagen: require('../../../assets/ley-identidad.gif'),
      descripcion: 'En Álgebra de Boole, esta ley establece que cualquier variable AND con 1 es igual a sí misma, y cualquier variable OR con 0 también es igual a sí misma.',
      expresion: 'A * 1 = A\nA + 0 = A',
    },
    {
      titulo: 'Ley del Dominio',
      imagen: require('../../../assets/leyes-dominio.gif'),
      descripcion: 'Cualquier variable OR con 1 es igual a 1, y cualquier variable AND con 0 es igual a 0.',
      expresion: 'A + 1 = 1\nA * 0 = 0',
    },  
    {
      titulo: 'Ley del Complemento',
      imagen: require('../../../assets/leyes-complemento.gif'),
      descripcion: 'Una variable AND con su complemento es igual a 0. Una variable OR con su complemento es igual a 1.',
      expresion: 'A * A\' = 0\nA + A\' = 1',
    },  
    {
      titulo: 'Ley Idempotente',
      imagen: require('../../../assets/leyes-idempotente.gif'),
      descripcion: 'Repetir una variable en una operación OR o AND no cambia el resultado.',
      expresion: 'A + A = A\nA * A = A',
    },  
    {
      titulo: 'Propiedad Distributiva',
      imagen: require('../../../assets/Propiedad-distributiva.png'),
      descripcion: 'La multiplicación se distribuye sobre la suma y viceversa en Álgebra de Boole.',
      expresion: 'A * (B + C) = A*B + A*C\nA + (B*C) = (A+B) * (A+C)',
    },
    {
      titulo:'Propiedad Conmutativa',
      imagen: require('../../../assets/Propiedad-conmutativa.png'),
      descripcion: 'La propiedad conmutativa en álgebra booleana establece que el orden de los operando no afecta el resultado de una operación. Esto se aplica tanto a la suma lógica (OR) como al producto lógico (AND). ',
      expresion: 'A + B = B + A\nA * B = B * A',
    },
    {
      titulo: 'Propiedad Asociativa',
      imagen: require('../../../assets/Propiedad-asociativa.png'),
      descripcion: 'La propiedad asociativa en las compuertas lógicas establece que el orden en que se agrupan las operaciones de suma o producto lógico no afecta el resultado final. Esto significa que puedes cambiar la agrupación de variables usando paréntesis en expresiones lógicas sin alterar su valor. ',
      expresion: '(A + B) + C = A + (B + C)\n(A * B) * C = A * (B * C)',
    },
    {
      titulo: 'Ley de DeMorgan',
      imagen: require('../../../assets/Ley-de-morgan.png'),
      descripcion: 'Dice que el resultado de una suma lógica con su salida negada y es igual que el resultado de una multiplicación lógica con sus entradas negadas, así mismo que el resultado de una multiplicación lógica con su salida negada es igual a una suma lógica con sus entradas negadas. Esto aplica para n entradas.',
      expresion: '(A * B)\' = A\' + B\'\n(A + B)\' = A\' * B\'',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {conceptosBoole.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Image style={styles.imagen} source={item.imagen} />
          <Text style={styles.descripcion}>{item.descripcion}</Text>
          <Text style={styles.expresion}>{item.expresion}</Text>
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
    backgroundColor: '#fff',
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
    marginBottom: 10,
  },
  expresion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    whiteSpace: 'pre-line',
    color: '#ff6c01',
  },
});

export default AlgebraBoole;
