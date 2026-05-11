const express = require('express');
const router = express.Router();

// 1. Token Bucket Rate Limiter
let tokens = 10;
const MAX_TOKENS = 10;
setInterval(() => { if (tokens < MAX_TOKENS) tokens++; }, 1000); // 1 token/sec

router.get('/rate-limit', (req, res) => {
    if (tokens > 0) {
        tokens--;
        res.json({ status: "ok", tokens_remaining: tokens });
    } else {
        res.status(429).set('Retry-After', '1').json({ error: "Too Many Requests", bucket: "empty" });
    }
});

// 2. Circuit Breaker Simulation
let errorCount = 0;
let circuitOpen = false;
let openUntil = 0;

router.get('/stable-resource', (req, res) => {
    if (circuitOpen && Date.now() < openUntil) {
        return res.status(503).json({ error: "Circuit Breaker Open", recovery_in: Math.ceil((openUntil - Date.now())/1000) });
    }
    
    circuitOpen = false;
    if (req.query.fail === 'true') {
        errorCount++;
        if (errorCount >= 3) {
            circuitOpen = true;
            openUntil = Date.now() + 5000; // Open for 5 seconds
            errorCount = 0;
        }
        return res.status(500).json({ error: "Internal Server Error", consecutive_failures: errorCount });
    }

    errorCount = 0;
    res.json({ status: "ok", message: "Resource is healthy" });
});

module.exports = router;
