import multer from 'multer';
import path from 'path';

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.floor(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  }
});

// Filtro de arquivos permitidos
const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
  allowed.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error('Arquivo inválido'));
};

// Configuração final do Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});

export default upload;
