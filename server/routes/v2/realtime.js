const express = require('express');
const router = express.Router();

// 1. WebSocket Handshake Simulation
router.get('/handshake', (req, res) => {
    const upgradeHeader = req.headers.upgrade;
    const connectionHeader = req.headers.connection;
    const wsKey = req.headers['sec-websocket-key'];

    if (upgradeHeader === 'websocket' && connectionHeader?.toLowerCase().includes('upgrade')) {
        // In a real server, we would switch protocols here. 
        // For testing, we return a 200 or 101 status depending on validation.
        if (!wsKey) return res.status(400).json({ error: "Missing sec-websocket-key" });
        
        return res.json({ 
            status: 101, 
            message: "Switching Protocols", 
            accept: `accept-${wsKey}` 
        });
    }

    res.status(426).json({ 
        error: "Upgrade Required", 
        message: "This endpoint requires a WebSocket upgrade" 
    });
});

module.exports = router;
