import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';

console.log('SQLite:', SQLite);

let db;

// Inicializa la base de datos con openDatabaseAsync
export const initDB = async () => {
  if (db) return; // Si ya está inicializada, no la volvemos a abrir
  try {
    console.log('Intentando abrir la base de datos...');
    db = await SQLite.openDatabaseAsync('miApp.db'); // Usando openDatabaseAsync
    console.log('Base de datos abierta correctamente');
  } catch (error) {
    console.error('Error al abrir la base de datos: ', error);
  }
};

// Crear tablas
export const crearTablas = async () => {
  if (!db) await initDB(); // Asegúrate de que la base de datos esté inicializada

  await db.transaction(async tx => {
    // Crear tabla usuarios
    await tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        correo TEXT,
        codigo TEXT,
        rol TEXT
      );`
    );
    console.log('Tabla usuarios creada');

    // Crear tabla credenciales
    await tx.executeSql(
      `CREATE TABLE IF NOT EXISTS credenciales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT
      );`
    );
    console.log('Tabla credenciales creada');

    // Verificar si las tablas están creadas correctamente
    const { rows } = await tx.executeSql('SELECT name FROM sqlite_master WHERE type="table"');
    console.log('Tablas en la base de datos: ', rows._array);
  });
};

// Insertar usuario
export const insertarUsuario = async (nombre, correo, codigo, rol) => {
  if (!db) {
    console.log('La base de datos aún no está inicializada');
    await initDB(); // Inicializar base de datos si no lo está
  }

  console.log('Base de datos inicializada', db);

  try {
    await db.transaction(async tx => {
      const result = await tx.executeSql(
        'INSERT INTO usuarios (nombre, correo, codigo, rol) VALUES (?, ?, ?, ?)',
        [nombre, correo, codigo, rol]
      );
      console.log('Usuario insertado con éxito: ', result);
    });
  } catch (error) {
    console.error('Error al insertar el usuario: ', error);
  }
};

// Obtener usuarios
export const obtenerUsuarios = async () => {
  if (!db) await initDB();

  let result = [];
  
  await db.transaction(async tx => {
    const { rows } = await tx.executeSql('SELECT * FROM usuarios');
    result = rows._array;
  });

  console.log('Usuarios obtenidos: ', result);
  return result;
};

// Guardar credenciales (solo email)
export const guardarCredenciales = (email) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO credenciales (email) VALUES (?)',
        [email],
        () => resolve(true), // Si se guarda correctamente
        (txObj, error) => {
          console.error(error);
          reject(false); // Si hay un error al guardar
        }
      );
    });
  });
};

// Función para obtener el correo guardado desde SQLite
export const obtenerCredenciales = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM credenciales LIMIT 1', // Asegúrate de que solo obtienes el primer correo
        [],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0).email); // Devuelve el correo almacenado
          } else {
            resolve(null); // No hay credenciales guardadas
          }
        },
        (txObj, error) => {
          console.error(error);
          reject(null); // Si hay un error, no se obtiene el correo
        }
      );
    });
  });
};

// Llamada a las funciones para verificar
initDB();  // Inicializa la base de datos
crearTablas(); // Crea las tablas si no existen
