const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// 1. CBOR Simulation (Binary JSON)
router.get('/cbor', (req, res) => {
    res.set('Content-Type', 'application/cbor');
    // Simulated CBOR for {"ok": true}
    const cbor = Buffer.from([0xA1, 0x62, 0x6F, 0x6B, 0xF5]);
    res.send(cbor);
});

// 2. BSON Simulation (Binary JSON)
router.get('/bson', (req, res) => {
    res.set('Content-Type', 'application/bson');
    // Simulated BSON for {"msg": "hi"}
    const bson = Buffer.from([0x12, 0x00, 0x00, 0x00, 0x02, 0x6D, 0x73, 0x67, 0x00, 0x03, 0x00, 0x00, 0x00, 0x68, 0x69, 0x00, 0x00]);
    res.send(bson);
});

// 3. Content-Digest Verification (SHA-256)
router.get('/secure-content', (req, res) => {
    const body = JSON.stringify({ data: "High Integrity Asset", ts: Date.now() });
    const digest = crypto.createHash('sha256').update(body).digest('base64');
    
    res.set('Content-Type', 'application/json');
    res.set('Digest', `sha-256=${digest}`);
    res.send(body);
});

module.exports = router;
