import express from 'express';
import { criarAgendamento, listarAgendamentos, editarAgendamento, deletarAgendamento} from '../controller/agendamentoController.js';
import { verificarToken } from '../middlewares/authMiddlewares.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Rota para criar um agendamento com upload de imagem
router.post('/', verificarToken, upload.single('imagem'), criarAgendamento);

// Listar agendamentos do usuário
router.get('/', verificarToken, listarAgendamentos);

// Editar agendamento do usuário
router.put('/:id', verificarToken, editarAgendamento); 

// Deletar agendamento do usuário
router.delete('/:id', verificarToken, deletarAgendamento);

export default router;