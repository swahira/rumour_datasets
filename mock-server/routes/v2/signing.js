const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const SHARED_SECRET = 'rumour-hmac-key-2026';

// 1. Validate HMAC Signature
router.post('/secure-data', (req, res) => {
    const signature = req.headers['x-rumour-signature'];
    if (!signature) return res.status(401).json({ error: "Missing X-Rumour-Signature" });

    const body = JSON.stringify(req.body);
    const expected = crypto.createHmac('sha256', SHARED_SECRET)
                           .update(body)
                           .digest('hex');

    if (signature === expected) {
        res.json({ status: "Verified", data: "Integrity check passed" });
    } else {
        res.status(403).json({ 
            status: "Forbidden", 
            error: "Invalid HMAC Signature",
            received: signature,
            expected: expected // Revealed for debugging
        });
    }
});

module.exports = router;
