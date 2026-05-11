const express = require('express');
const router = express.Router();

// 1. OAuth2 PKCE Simulation
let authCodes = {};

router.post('/oauth/authorize', (req, res) => {
    const { response_type, client_id, code_challenge } = req.body;
    if (response_type !== 'code' || !code_challenge) return res.status(400).json({ error: "Invalid PKCE request" });

    const code = `code-${Math.random().toString(36).substring(7)}`;
    authCodes[code] = { challenge: code_challenge, client_id };
    res.json({ code, state: req.body.state });
});

router.post('/oauth/token', (req, res) => {
    const { grant_type, code, code_verifier } = req.body;
    const stored = authCodes[code];

    if (!stored || grant_type !== 'authorization_code') return res.status(401).json({ error: "Invalid code" });

    // In a real server, we would SHA256(code_verifier) and compare to challenge.
    // Here we simulate success if verifier is provided.
    if (!code_verifier) return res.status(403).json({ error: "Code verifier required for PKCE" });

    res.json({ 
        access_token: `pkce-token-${Date.now()}`,
        id_token: "header.payload.signature",
        expires_in: 3600 
    });
});

// 2. OIDC UserInfo
router.get('/oidc/userinfo', (req, res) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer pkce-token-')) return res.status(401).end();
    
    res.json({
        sub: "user-123",
        name: "Enterprise User",
        email: "user@enterprise.com",
        email_verified: true,
        groups: ["admins", "developers"]
    });
});

module.exports = router;
