const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET = 'rumour-super-secret';
const ADMIN_SECRET = 'rumour-admin-secret';

// 1. JWT Flow
router.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    if (password === 'fail') return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ email, role: role || 'user' }, role === 'admin' ? ADMIN_SECRET : SECRET, { expiresIn: '1h' });
    res.json({ token, role: role || 'user', expires_in: 3600 });
});

// 2. Token Validation (New)
router.get('/validate', (req, res) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }
    const token = auth.split(' ')[1];
    try {
        jwt.verify(token, SECRET);
        res.json({ valid: true, message: 'Token is active' });
    } catch (e) {
        res.status(401).json({ error: 'Token verification failed', detail: e.message });
    }
});

// 3. Secret Management / RBAC
router.get('/admin-only', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        const decoded = jwt.verify(token, ADMIN_SECRET);
        res.json({ message: 'Welcome Admin', data: decoded });
    } catch (e) {
        res.status(403).json({ error: 'Forbidden: Admin access required', detail: e.message });
    }
});

// 3. Token Expiry Simulation
router.get('/expired-token', (req, res) => {
    res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });
});

// 4. Refresh Workflows
router.post('/refresh', (req, res) => {
    const { refresh_token } = req.body;
    if (!refresh_token) return res.status(400).json({ error: 'Refresh token required' });
    res.json({ token: jwt.sign({ email: 'user@example.com' }, SECRET), new_refresh: 'new-ref-123' });
});

module.exports = router;
