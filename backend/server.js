const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Usuários "falsos" (pode ser substituído por um banco de dados real)
const users = [];

// Função para gerar o JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, 'secreta', { expiresIn: '1h' });
};

// Rota de registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { id: Date.now(), username, password: hashedPassword };
  users.push(user);

  res.json({ message: 'Usuário registrado com sucesso!' });
});

// Rota de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

  const token = generateToken(user);
  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }).json({ message: 'Login bem-sucedido' });
});

// Rota para validar o token
app.get('/validate', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Sem token' });

  try {
    const decoded = jwt.verify(token, 'secreta');
    res.json({ message: 'Token válido', userId: decoded.id });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
