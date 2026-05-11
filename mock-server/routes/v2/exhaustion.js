const express = require('express');
const router = express.Router();

let globalLoad = 0;

// 1. Resource Exhaustion Simulation (Latency grows with load)
router.get('/heavy-load', (req, res) => {
    globalLoad++;
    const latency = globalLoad * 100; // 100ms per active load unit
    
    setTimeout(() => {
        res.json({ status: "ok", active_load: globalLoad, latency_applied: `${latency}ms` });
        globalLoad--;
    }, latency);
});

// 2. GC Stress (Random Latency Spikes)
router.get('/gc-spike', (req, res) => {
    const isSpiking = Math.random() > 0.7;
    const latency = isSpiking ? 2000 : 50; // 2s spike or 50ms normal
    
    setTimeout(() => {
        res.json({ status: "ok", type: isSpiking ? "GC_SPIKE" : "NORMAL", latency });
    }, latency);
});

module.exports = router;
