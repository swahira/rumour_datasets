const DB = require('../utils/db');
const usersDb = new DB('users');

const TOKENS = {}; // token -> user_id

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const users = await usersDb.findAll();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = `mock_token_${Math.random().toString(36).substr(2, 9)}`;
  TOKENS[token] = user.id;

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const users = await usersDb.findAll();
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
    name: name || email.split('@')[0],
    role: 'USER',
    createdAt: new Date().toISOString()
  };

  await usersDb.insert(newUser);
  res.status(201).json(newUser);
};

exports.logout = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.replace('Bearer ', '');
  if (TOKENS[token]) {
    delete TOKENS[token];
    res.json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });

  const token = authHeader.replace('Bearer ', '');
  if (TOKENS[token]) {
    req.userId = TOKENS[token];
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

exports.getProfile = async (req, res) => {
  const user = await usersDb.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.isAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });

  const token = authHeader.replace('Bearer ', '');
  const userId = TOKENS[token];
  if (!userId) {
    console.log(`[AUTH] Token not found in TOKENS map: ${token}`);
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await usersDb.findById(userId);
  console.log(`[AUTH] Verifying Admin for User: ${user ? user.email : 'Unknown'} (Role: ${user ? user.role : 'N/A'})`);
  
  if (user && user.role && user.role.toUpperCase() === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: Admin access required' });
  }
};
