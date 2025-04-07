const express = require('express');
const { obtenerImagenes, crearImagen } = require('../controllers/imagenesController');

const router = express.Router();

router.get('/', obtenerImagenes);
router.post('/', crearImagen);

module.exports = router;