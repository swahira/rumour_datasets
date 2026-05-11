const express = require('express');
const router = express.Router();

// 1. Connection Draining Simulation
router.get('/drain', (req, res) => {
    res.set({
        'Connection': 'close',
        'X-Server-Status': 'Draining',
        'Retry-After': '30'
    });
    res.json({ message: "Request accepted, but please reconnect to a different node" });
});

// 2. Protocol Downgrade / Upgrade Required
router.get('/secure-gate', (req, res) => {
    const protocol = req.headers['x-protocol-version'] || '1.0';
    
    if (protocol === '1.0') {
        return res.status(426).set({
            'Upgrade': 'HTTP/2.0, TLS/1.3',
            'Connection': 'Upgrade'
        }).json({ error: "Upgrade Required", message: "Legacy protocol 1.0 no longer supported" });
    }
    
    res.json({ status: "Accepted", protocol });
});

module.exports = router;
