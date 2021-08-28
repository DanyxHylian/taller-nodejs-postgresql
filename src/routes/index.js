const { Router } = require('express');
const router = Router();

const {getCliente, createCliente, getClienteByCedula, deleteCliente} = require('../controllers/index.controller')

router.get('/cliente', getCliente);
router.get('/cliente/:cedula', getClienteByCedula);
router.post('/cliente', createCliente);
router.delete('/cliente/:cedula', deleteCliente);

module.exports = router;