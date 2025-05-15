import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const FormularioMenu = () => {
  const navigation = useNavigation();

  const handleSelection = (value) => {
    if (value === 'logic_gates') {
      navigation.navigate('CompuertasLogicas');
    } else if (value === 'alg_boole') {
      navigation.navigate('AlgebraBoole');
    } else if (value === 'mapa_karnaugh') {
      navigation.navigate('MapaKarnaugh');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Formulario</Text>

        <Text style={styles.description}>
          Este formulario fue creado para ayudarte a mejorar tu aprendizaje en lógica digital.
        </Text>

        <Text style={styles.highlight}>
          ¡¡Esperamos que lo disfrutes y aprendas mucho con él!!{'\n\n'}
        </Text>


        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={handleSelection}
            placeholder={{ label: 'Selecciona una opción...', value: null }}
            items={[
              { label: 'Compuertas Lógicas', value: 'logic_gates' },
              { label: 'Álgebra de Boole', value: 'alg_boole' },
              { label: 'Mapa de Karnaugh', value: 'mapa_karnaugh' },
            ]}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#faebe0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#963f00',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  highlight: {
    fontSize: 18,
    color: '#ff6c01',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  selectionPrompt: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 3,
    borderColor: '#ff6c01',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    width: '100%',
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    elevation: 3,
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#ff6c01',
  },
});

export default FormularioMenu;


