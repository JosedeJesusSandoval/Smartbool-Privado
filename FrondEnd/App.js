import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Components/Estilos.js';

// Archivos de componentes
import Calculadora from './Components/Calculadora.js';
import Historial from './Components/Historial.js';
import Imagenes from './Components/Imagenes.js';
import Formulario from './Components/Formulario.js';
import Config from './Components/Menu_Burger/Configuracion.js';
import AboutUs from './Components/Menu_Burger/Sobre_Nosotros.js';

const Drawer = createDrawerNavigator();

//animacion


const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Historial'); // Manejo de pestañas activas
const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'Historial':
        return <Historial />;
      case 'Imagenes':
        return <Imagenes />;
      case 'Calculadora':
        return <Calculadora />;
      case 'Formulario':
        return <Formulario />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header {/* Navbar 
      <View style={styles.header2App}>
        <Text style={styles.headerTitle}>Smartboole</Text>
      </View>*/}

      <View style={styles.content}>{renderContent()}</View>

      
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setActiveTab('Historial')} style={styles.navButton}>
          <Ionicons name="time-outline" size={24} color={activeTab === 'Historial' ? 'sienna' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Historial' && styles.activeText]}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Imagenes')} style={styles.navButton}>
          <Ionicons name="image" size={24} color={activeTab === 'Imagenes' ? 'sienna' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Imagenes' && styles.activeText]}>Imagenes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Calculadora')} style={styles.navButton}>
          <Ionicons name="calculator" size={24} color={activeTab === 'Calculadora' ? 'sienna' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Calculadora' && styles.activeText]}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Formulario')} style={styles.navButton}>
          <Ionicons name="book-outline" size={24} color={activeTab === 'Formulario' ? 'sienna' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Formulario' && styles.activeText]}>Formulario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginScreen = ({ setIsLoggedIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fondo.jpg')} style={styles.card} resizeMode="cover">
        <Image source={ require('./assets/smarty.png' )} style={styles.logoApp} />
        <Text style={styles.title}>Smartboole</Text>
        <Text style={styles.subtitle}>{isSignUp ? 'Regístrate' : 'Inicia sesión para continuar.'}</Text>
        <TextInput placeholder="Correo electrónico" style={styles.input} placeholderTextColor="#888888" />
        <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} placeholderTextColor="#888888" />
        {isSignUp && (
          <TextInput placeholder="Confirmar contraseña" secureTextEntry style={styles.input} placeholderTextColor="#888888" />
        )}
        <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.buttonText}>{isSignUp ? 'Registrarse' : 'Iniciar Sesión'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.toggleText}>
            {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#999',
          drawerActiveTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#fff',
            width: 250,
          },
        }}
      >
        {isLoggedIn ? (
          <>
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen name="Configurar" component={Config} />
          <Drawer.Screen name="Sobre Nosotros" component={AboutUs} />
          <Drawer.Screen name="Log Out">
            {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
          </Drawer.Screen>
          </>
        )
          : (
          <Drawer.Screen name="Login">
            {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;