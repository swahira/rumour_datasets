const express = require('express');
const router = express.Router();

// 1. Leaky Bucket Simulation
let queue = 0;
const CAPACITY = 5;
const LEAK_RATE = 1000; // 1 req / sec

setInterval(() => { if (queue > 0) queue--; }, LEAK_RATE);

router.get('/leaky-bucket', (req, res) => {
    if (queue < CAPACITY) {
        queue++;
        res.json({ status: "Accepted", queue_size: queue });
    } else {
        res.status(429).json({ error: "Bucket Overflow", message: "Leaky bucket is full" });
    }
});

// 2. IP-Based Rate Limiting (X-Real-IP)
let ipHits = {};
router.get('/ip-limit', (req, res) => {
    const ip = req.headers['x-real-ip'] || req.ip;
    ipHits[ip] = (ipHits[ip] || 0) + 1;
    
    if (ipHits[ip] > 3) {
        return res.status(429).json({ error: "IP Throttled", ip, hits: ipHits[ip] });
    }
    res.json({ status: "ok", ip, hits: ipHits[ip] });
});

module.exports = router;
