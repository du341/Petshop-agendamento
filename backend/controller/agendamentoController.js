import db from '../config/db.js';

export async function criarAgendamento(req, res) {
  const { nome_pet, raca, data_banho, horario, observacoes } = req.body;
  const usuario_id = req.usuario.id;
  const imagem = req.file ? req.file.filename : null;

  if (!imagem) {
    return res.status(400).json({ mensagem: 'A imagem do pet é obrigatória.' });
  }

  try {
    await db.execute(
      `INSERT INTO agendamentos (usuario_id, nome_pet, raca, data_banho, horario, observacoes, imagem)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [usuario_id, nome_pet, raca, data_banho, horario, observacoes, imagem]
    );

    res.status(201).json({ mensagem: 'Agendamento criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

  // Listar agendamentos do usuário logado
export async function listarAgendamentos(req, res) {
    const usuario_id = req.usuario.id;
  
    try {
      const [resultados] = await db.execute(
        `SELECT id, nome_pet, raca, data_banho, horario, observacoes, imagem
         FROM agendamentos
         WHERE usuario_id = ?`,
        [usuario_id]
      );
  
      const agendamentosComImagem = resultados.map(item => {
        const dataFormatada = new Date(item.data_banho)
          .toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      
        return {
          ...item,
          data_banho: dataFormatada,
          imagem_url: `http://localhost:3000/uploads/${item.imagem}`
        };
      });
      res.status(200).json(agendamentosComImagem);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
}
// Editar agendamento do usuário logado
export async function editarAgendamento(req, res) {
    const agendamentoId = req.params.id;
    const usuario_id = req.usuario.id;
    const { nome_pet, raca, data_banho, horario, observacoes } = req.body;
  
    try {
      const [resultado] = await db.execute(
        `UPDATE agendamentos
         SET nome_pet = ?, raca = ?, data_banho = ?, horario = ?, observacoes = ?
         WHERE id = ? AND usuario_id = ?`,
        [nome_pet, raca, data_banho, horario, observacoes, agendamentoId, usuario_id]
      );
  
      if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado ou não autorizado.' });
      }
  
      res.status(200).json({ mensagem: 'Agendamento atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  // Delete agendamento do usuário logado
  export async function deletarAgendamento(req, res) {
    const agendamentoId = req.params.id;
    const usuario_id = req.usuario.id;
  
    try {
      const [resultado] = await db.execute(
        `DELETE FROM agendamentos WHERE id = ? AND usuario_id = ?`,
        [agendamentoId, usuario_id]
      );
  
      if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Agendamento não encontrado ou não autorizado.' });
      }
  
      res.status(200).json({ mensagem: 'Agendamento excluído com sucesso!' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
