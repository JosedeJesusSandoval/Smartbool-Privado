import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  header2App: { 
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
},
  container: {
    flex: 1,
    backgroundColor: '#faebe0',
  },
  logoApp: {
    width: "35%",
    height: "40%",
    marginTop: 0,
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#543023',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    alignSelf: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#543023',
    marginTop: 10,
    textAlign: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#777',
    fontSize: 12,
  },
  activeText: {
    color: '#d9534f',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#faebe0',
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: "cover",
    pointerEvents: "box-none",
  },
  
  button: {
    width: '90%',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  containerImg: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    margin: 10,
  },

/*****  Historial.js  ********/

  containerHis: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cuentaHis: {
    flex: 1,
    width: '100%',
  },
  tituloHis: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: "black",
  },
  datosHis: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
 imagen: {
  width: 150,
  height: 150,
  borderRadius: 10,
  marginBottom: 10,
  resizeMode: 'cover', // Esto asegura que la imagen cubra el espacio sin distorsionarse
},
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  botonEditar: {
    backgroundColor: 'cadetblue',
    padding: 10,
    borderRadius: 5,
  },
  botonEliminar: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  separador: {
    width: 20, // Espacio entre los botones
    height: 45,
  },
  sindatoUsuario: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imagenSindatoUsuario: {
    width: '80%',
    height: '30%',
    marginBottom: 20,
    opacity: 0.5, 
    objectFit: 'cover',
  },
  textoSindatoUsuario: {
    fontSize: 18,
    color: '#888',
  },

/*****  Imagenes  ********/

/*****  Formulario  ********/
containerFormulario: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#faebe0',
  },
  gateContainerFormulario: {
    marginBottom: 20,
    alignItems: 'center',
  },
  gateContainerform: {
    width: '90%',
    padding: 20,
    backgroundColor: '#faebe0',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#fff', // Sombra clara
    shadowOffset: { width: -5, height: -5 }, // Sombra clara en la esquina superior izquierda
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    borderColor: '#e0e0e0', // Borde para un efecto más suave
    borderWidth: 1,
    // Sombra oscura
  },
  gateNameFormulario: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gateImage: {
    width: 200, // Ajusta el ancho de la imagen
    //height: 150, // Establece una altura fija para todas las imágenes
    resizeMode: 'contain', // Mantiene la proporción de la imagen
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

/*****  Calculadora  ********/
containerCalculadora: {
        flex: 1,
        backgroundColor: '#faebe0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        //alignItems: 'flex-center',
        padding: 20,
        width: '100%',
    },
    displayText: {
        fontSize: 42,
        color: '#333',
    },
    buttonContainer: {
        flex: 3,
        width: '100%',
        padding: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    buttonCalculadora: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 3,
        margin: 5,
    },
    buttonTextCalculadora: {
        fontSize: 24,
        color: '#333',
    },
    operatorButton: {
        backgroundColor: '#f0f0f0',
    },
    operatorButtonText: {
        color: '#d9534f',
    },
    equalButton: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9534f',
        elevation: 3,
        margin: 5,
    },
    equalButtonText: {
        fontSize: 32,
        color: 'white',
    },
    clearButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        elevation: 3,
        padding: 15,
        width: '100%',
    },
    clearButtonText: {
        fontSize: 24,
        color: '#333',
    },
    // Estilos de checkbox y texto
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: '#777',
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    innerCheckbox: {
      width: 12,
      height: 12,
      backgroundColor: '#777',
      borderRadius: 2,
    },
    rememberMeText: {
      fontSize: 16,
      color: '#555',
    },
    spaceBetween: {
      marginBottom: 20, // Espacio entre el checkbox y el botón
    },

    datosCard: {
      backgroundColor: '#fff',
      borderRadius: 16,
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 6,
      alignItems: 'center',
    },
    imagenCard: {
      width: 200,
      height: 200,
      borderRadius: 12,
      resizeMode: 'cover',
      marginBottom: 15,
    },
    cardFecha: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 15,
    },
    botonesCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
    },
    botonEditarNuevo: {
      backgroundColor: '#02a314',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginHorizontal: 5,
      flex: 1,
      alignItems: 'center',
    },
    botonEliminarNuevo: {
      backgroundColor: '#ff5555',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginHorizontal: 5,
      flex: 1,
      alignItems: 'center',
    },
    textoBotonNuevo: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    
  

/*****  Configuracion.js  ********/

/*****  Sobre_Nosotros.js  ********/


});

export default styles 
