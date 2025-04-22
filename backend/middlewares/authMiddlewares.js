import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

export function verificarToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ mensagem: 'Token inválido.' });
  }
}
