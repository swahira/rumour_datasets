const express = require('express');
const router = express.Router();
const crypto = require('crypto');

let oauthTokens = new Set();
const SHARED_SECRET = 'rumour_hmac_secret';

// 1. OAuth2 Token Endpoint
router.post('/oauth/token', (req, res) => {
    const { client_id, client_secret, grant_type } = req.body;
    
    if (grant_type !== 'client_credentials') {
        return res.status(400).json({ error: 'unsupported_grant_type' });
    }
    
    if (client_id === 'rumour_client' && client_secret === 'rumour_secret') {
        const token = `access_${Date.now()}`;
        oauthTokens.add(token);
        return res.json({ 
            access_token: token, 
            token_type: 'Bearer', 
            expires_in: 3600 
        });
    }
    
    res.status(401).json({ error: 'invalid_client' });
});

// 2. HMAC Signature Validation
// Header format: X-Rumour-Signature: <hmac-sha256>
// Payload: JSON body
router.post('/hmac-verify', (req, res) => {
    const signature = req.headers['x-rumour-signature'];
    if (!signature) return res.status(401).json({ error: 'Missing signature' });

    const hmac = crypto.createHmac('sha256', SHARED_SECRET);
    hmac.update(JSON.stringify(req.body));
    const expected = hmac.digest('hex');

    if (signature === expected) {
        res.json({ status: 'Signature Validated', timestamp: Date.now() });
    } else {
        res.status(403).json({ 
            error: 'Invalid Signature', 
            expected: expected, 
            received: signature 
        });
    }
});

// 3. SSL/TLS Requirement Simulation
router.get('/secure-resource', (req, res) => {
    const auth = req.headers.authorization;
    if (!auth || !oauthTokens.has(auth.replace('Bearer ', ''))) {
        return res.status(401).json({ error: 'unauthorized' });
    }
    res.json({ data: "Top Secret Security Data", security_level: "High" });
});

module.exports = router;
