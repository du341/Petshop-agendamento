import express from 'express';
import { cadastrarUsuario, login } from '../controller/authController.js';
const router = express.Router();

router.post('/cadastrar', cadastrarUsuario);
router.post('/login', login);

export default router; 