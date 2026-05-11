const express = require('express');
const router = express.Router();

let spikeCounter = 0;
let lastSpikeReset = Date.now();

// 1. Synthetic Data Generator (Large Random Arrays)
router.get('/synthetic', (req, res) => {
    const count = parseInt(req.query.count) || 10;
    const data = Array.from({ length: count }, (_, i) => ({
        id: i,
        uuid: Math.random().toString(36).substring(2, 15),
        val: Math.random() * 1000,
        type: ['sensor', 'active', 'pending'][Math.floor(Math.random() * 3)]
    }));
    res.json({ count, data });
});

// 2. Spike Testing Simulation (Fails under high load)
router.get('/spike', (req, res) => {
    const now = Date.now();
    if (now - lastSpikeReset > 5000) {
        spikeCounter = 0;
        lastSpikeReset = now;
    }
    
    spikeCounter++;
    if (spikeCounter > 10) {
        return res.status(503).json({ 
            error: "Service Unavailable", 
            message: "Spike detected! Rate exceeded 2 req/sec" 
        });
    }
    
    res.json({ status: "ok", load: `${spikeCounter}/10` });
});

// 3. Fuzzing Target (Accepts anything, logs structure)
router.post('/fuzz', (req, res) => {
    res.json({ 
        message: "Fuzz received", 
        body_type: typeof req.body, 
        fields: Object.keys(req.body) 
    });
});

module.exports = router;
