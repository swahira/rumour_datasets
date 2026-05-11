const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET = 'rumour-jwt-adv-secret';

// 1. Generate Complex Token
router.get('/issue', (req, res) => {
    const token = jwt.sign(
        { user: "rumour-bot", permissions: ["read:data", "write:internal"] },
        SECRET,
        { issuer: "rumour-auth-v2", audience: "rumour-dashboard", expiresIn: '1h' }
    );
    res.json({ token });
});

// 2. Validate Claims (Expect Audience/Issuer)
router.post('/verify', (req, res) => {
    const auth = req.headers.authorization?.replace('Bearer ', '');
    try {
        const decoded = jwt.verify(auth, SECRET, { 
            issuer: "rumour-auth-v2", 
            audience: "rumour-dashboard" 
        });
        res.json({ status: "Valid", claims: decoded });
    } catch (e) {
        res.status(403).json({ error: "JWT Claim Mismatch", detail: e.message });
    }
});

module.exports = router;
