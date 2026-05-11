const express = require('express');
const router = express.Router();

let requestCounts = {};

// 1. Rate Limiting Simulation
router.get('/rate-limit', (req, res) => {
    const ip = req.ip;
    requestCounts[ip] = (requestCounts[ip] || 0) + 1;
    
    if (requestCounts[ip] > 3) {
        return res.status(429).json({ 
            error: 'Too many requests', 
            retry_after: 10,
            message: 'Rate limit exceeded for testing'
        });
    }
    res.json({ message: 'Success', count: requestCounts[ip] });
});

// 2. Timeout / Latency
router.get('/timeout', (req, res) => {
    const delay = parseInt(req.query.ms) || 5000;
    setTimeout(() => {
        res.json({ message: `Responded after ${delay}ms` });
    }, delay);
});

// 3. Fault Injection (Random 500s)
router.get('/flakey', (req, res) => {
    if (Math.random() > 0.5) {
        res.status(500).json({ error: 'Random Internal Server Error' });
    } else {
        res.json({ message: 'Stable response' });
    }
});

// 4. Binary Data Handling
router.get('/binary', (req, res) => {
    const buffer = Buffer.from('Rumour Binary Test Data');
    res.set('Content-Type', 'application/octet-stream');
    res.send(buffer);
});

// 5. Large Payloads
router.get('/bloat', (req, res) => {
    const size = parseInt(req.query.kb) || 1024;
    const data = "X".repeat(size * 1024);
    res.json({ size: `${size}KB`, data });
});

module.exports = router;
