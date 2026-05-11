const express = require('express');
const router = express.Router();

let currentVaultSecret = `secret_${Math.floor(Date.now() / 60000)}`; // Rotates every minute

// 1. Vault Secret Retrieval
router.get('/vault/secret', (req, res) => {
    res.json({ secret: currentVaultSecret, ttl: 60 });
});

// 2. Secret Validation
router.post('/validate-secret', (req, res) => {
    const { secret } = req.body;
    if (secret === currentVaultSecret) {
        res.json({ status: "valid", identity: "vault-app-01" });
    } else {
        res.status(403).json({ 
            error: "Forbidden", 
            message: "Secret is stale or invalid. Please rotate." 
        });
    }
});

// 3. Multi-Tenant Isolation
router.get('/tenant/:id/config', (req, res) => {
    res.json({ tenant: req.params.id, region: "us-east-1", status: "isolated" });
});

module.exports = router;
