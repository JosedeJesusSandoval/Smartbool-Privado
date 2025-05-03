import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Components/Estilos.js';

// Import components
import Calculadora from './Components/Calculadora';
import Historial from './Components/Historial';
import Imagenes from './Components/Imagenes';
import Formulario from './Components/Formulario';
import Config from './Components/Menu_Burger/Configuracion';
import AboutUs from './Components/Menu_Burger/Sobre_Nosotros';
import ChangePassword from './Components/Menu_Burger/ChangePassword';
import Quiz from './Components/Quiz';
import { guardarCredenciales } from './DB/sqlite'; // Importa la función para guardar credenciales
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Components/Menu_Burger/Configuracion'; 
import ChangeEmail from './Components/Menu_Burger/ChangeEmail';
import CustomDrawerContent from './Components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

import { supabase } from './DB/supabase';
import * as Crypto from 'expo-crypto';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Historial');

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
      case 'Quiz':
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setActiveTab('Historial')} style={styles.navButton}>
          <Ionicons name="time-outline" size={24} color={activeTab === 'Historial' ? '#d9534f' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Historial' && styles.activeText]}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Imagenes')} style={styles.navButton}>
          <Ionicons name="image" size={24} color={activeTab === 'Imagenes' ? '#d9534f' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Imagenes' && styles.activeText]}>Imagenes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Calculadora')} style={styles.navButton}>
          <Ionicons name="calculator" size={24} color={activeTab === 'Calculadora' ? '#d9534f' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Calculadora' && styles.activeText]}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Formulario')} style={styles.navButton}>
          <Ionicons name="book-outline" size={24} color={activeTab === 'Formulario' ? '#d9534f' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Formulario' && styles.activeText]}>Formulario</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Quiz')} style={styles.navButton}>
          <Ionicons name="help-circle-outline" size={24} color={activeTab === 'Quiz' ? '#d9534f' : '#777'} />
          <Text style={[styles.navText, activeTab === 'Quiz' && styles.activeText]}>Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginScreen = ({ setIsLoggedIn, setUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Estado para el checkbox

  const isValidEmail = (email) => {
    const emailDomainRegex = /@(alumnos\.udg\.mx|academicos\.udg\.mx)$/;
    return emailDomainRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).+$/;
    return passwordRegex.test(password);
  };

  // Función para generar el hash de la contraseña
  const hashPassword = async (password) => {
    const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
    return hash;
  };

  const handleAuth = async () => {
    // Primero verificar que el correo y contraseña sean válidos
    if (!isValidEmail(email)) {
      setStatus("El correo debe terminar en @alumnos.udg.mx o @academicos.udg.mx");
      return;
    }

    if (!isValidPassword(password)) {
      setStatus("La contraseña debe contener al menos una mayúscula y un carácter especial.");
      return;
    }

    if (isSignUp) {
      if (password !== confirmPassword) {
        setStatus("Las contraseñas no coinciden.");
        return;
      }

      const hashedPassword = await hashPassword(password);
      const { data, error } = await supabase.from('usuarios').insert([
        { email, password_hash: hashedPassword },
      ]);

      if (error) {
        setStatus("Error al registrar usuario: " + error.message);
      } else {
        setStatus("Registro exitoso. Por favor, inicie sesión.");
        setIsSignUp(false); // Cambiar a la vista de inicio de sesión
      }
    } else {
      const { data, error } = await supabase
        .from('usuarios')
        .select('id, email, password_hash') // <--- selecciona también 'id' y 'email'
        .eq('email', email)
        .single();

      if (error || !data) {
        setStatus("Correo electrónico o contraseña incorrectos.");
        return;
      }

      const storedPasswordHash = data.password_hash;
      const hashedInputPassword = await hashPassword(password);

      if (hashedInputPassword === storedPasswordHash) {
        // Si el checkbox está marcado, guardar el correo en SQLite
        if (rememberMe) {
          await guardarCredenciales(email); // Guardar correo en SQLite
          setStatus("Correo guardado en SQLite.");
        }

        // Aquí se establece el usuario y el estado de inicio de sesión
        setUser(data);  // Establece el objeto del usuario aquí
        setIsLoggedIn(true);
        setStatus("Inicio de sesión exitoso.");
      } else {
        setStatus("Correo electrónico o contraseña incorrectos.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fondo.jpg')}
        style={styles.card}
        resizeMode="cover">
        <Image source={require('./assets/smarty.png')} style={styles.logoApp} />
        <Text style={styles.title}>Smartboole</Text>
        <Text style={styles.subtitle}>
          {isSignUp ? 'Regístrate' : 'Inicia sesión para continuar.'}
        </Text>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#888888"
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor="#888888"
        />
        {isSignUp && (
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            placeholderTextColor="#888888"
          />
        )}
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: rememberMe ? '#007bff' : '#ccc',
              marginRight: 10,
              backgroundColor: rememberMe ? '#007bff' : 'transparent',
            }}
          />
          <Text>Recordarme</Text>
        </TouchableOpacity>
        <View style={styles.spaceBetween}></View>
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isSignUp ? 'Registrarse' : 'Iniciar Sesión'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.toggleText}>
            {isSignUp
              ? '¿Ya tienes cuenta? Inicia sesión'
              : '¿No tienes cuenta? Regístrate'}
          </Text>
        </TouchableOpacity>
        <Text>{status}</Text>
      </ImageBackground>
    </View>
  );
};

const LogOutScreen = ({ route, navigation }) => {
  React.useEffect(() => {
    if (route?.params?.setIsLoggedIn) {
      route.params.setIsLoggedIn(false);
    }
  }, [route?.params?.setIsLoggedIn]);

  return <LoginScreen setIsLoggedIn={route?.params?.setIsLoggedIn || (() => {})} />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Inicializa el estado de 'user'
  const Stack = createStackNavigator();

  const ConfigScreen = ({ usuario, navigation }) => {
    // ✅ Acceso directo sin depender de route.params  
    return (
      <Stack.Navigator>
        <Stack.Screen name="Configuración" options={{ headerShown: false }}>
          {(props) => <Settings {...props} usuario={usuario} />}
        </Stack.Screen>
        <Stack.Screen name="Cambiar Contraseña" component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name="Cambiar Correo" component={ChangeEmail} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };  
  

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#d78f46',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#c9c9c9',
          drawerLabelStyle: { fontSize: 16, marginLeft: -10 },
          drawerStyle: { backgroundColor: '#5f2539', width: 260 },
        }}
      >
        {isLoggedIn ? (
          <>
            <Drawer.Screen
              name="Inicio"
              component={HomeScreen}
              options={{
                drawerIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} />,
              }}
            />
            <Drawer.Screen
              name="Configurar"
              options={{
                drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={20} color={color} />,
              }}
            >
              {(props) => <ConfigScreen {...props} usuario={user} />}
            </Drawer.Screen>
            <Drawer.Screen name="Sobre Nosotros" component={AboutUs} options={{
                drawerIcon: ({ color }) => <Ionicons name="people-outline" size={20} color={color} />,
              }}/>
            <Drawer.Screen
              name="Log Out"
              component={LogOutScreen}
              initialParams={{ setIsLoggedIn }}  // Aquí ya estás pasando setIsLoggedIn
              options={{
                drawerIcon: ({ color }) => <Ionicons name="log-out-outline" size={20} color={color} />,
              }}
            />
          </>
        ) : (
          <Drawer.Screen name="Login">
            {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
