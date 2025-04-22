import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function cadastrarUsuario(req, res) {
  const { email, senha } = req.body;

  try {
    const [userExist] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (userExist.length > 0) {
      return res.status(400).json({ mensagem: 'Usuário já cadastrado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    await db.execute('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, senhaCriptografada]);

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const [usuarios] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (usuarios.length === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    const usuario = usuarios[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ mensagem: 'Senha incorreta.' });
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ mensagem: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}
