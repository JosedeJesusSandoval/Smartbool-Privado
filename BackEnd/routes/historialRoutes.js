const express = require('express');
const { obtenerHistorial, crearHistorial } = require('../controllers/historialController');

const router = express.Router();

router.get('/', obtenerHistorial);
router.post('/', crearHistorial);

module.exports = router;