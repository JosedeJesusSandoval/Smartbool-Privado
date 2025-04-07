const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuariosRoutes');
const imagenesRoutes = require('./routes/imagenesRoutes');
const historialRoutes = require('./routes/historialRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/imagenes', imagenesRoutes);
app.use('/historial', historialRoutes);
app.use('/auth', authRoutes); 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});