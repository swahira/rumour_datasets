const express = require('express');
const router = express.Router();

// 1. Read Timeout Simulation (Slow Response)
router.get('/slow-read', (req, res) => {
    // We send the headers but wait before sending the body
    res.writeHead(200, { 'Content-Type': 'application/json' });
    setTimeout(() => {
        res.write(JSON.stringify({ status: "slow_ok", message: "If you see this, your timeout was long enough" }));
        res.end();
    }, 4000);
});

// 2. Proxy Header Validation
router.get('/proxy-check', (req, res) => {
    const forwarded = req.headers['x-forwarded-for'];
    const proto = req.headers['x-forwarded-proto'];
    
    if (!forwarded || !proto) {
        return res.status(403).json({ 
            error: "Forbidden", 
            message: "Direct access disabled. Must come through a simulated proxy." 
        });
    }
    
    res.json({ 
        message: "Proxy validation successful", 
        client_ip: forwarded,
        protocol: proto 
    });
});

module.exports = router;
