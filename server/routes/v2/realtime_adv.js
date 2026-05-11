const express = require('express');
const router = express.Router();

// 1. Advanced SSE (Heartbeats & Multi-Event)
router.get('/sse-multi', (req, res) => {
    res.set({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
    res.flushHeaders();

    const interval = setInterval(() => {
        res.write(`: heartbeat\n\n`); // SSE Heartbeat
        res.write(`event: log\ndata: {"msg": "System active", "ts": ${Date.now()}}\n\n`);
    }, 1000);

    setTimeout(() => {
        res.write(`event: alert\ndata: {"critical": true, "msg": "Threshold reached"}\n\n`);
        clearInterval(interval);
        res.end();
    }, 3500);
});

// 2. Long-Polling Simulation
router.get('/long-poll', (req, res) => {
    console.log("⏳ Long-polling request hanging...");
    setTimeout(() => {
        res.json({ status: "Delayed Success", data: "Data arrived after 3s" });
    }, 3000);
});

// 3. MQTT-over-WS Binary Simulation
router.get('/mqtt-sim', (req, res) => {
    // Simulated MQTT CONNECT/CONNACK binary frame
    const connack = Buffer.from([0x20, 0x02, 0x00, 0x00]); 
    res.set('Content-Type', 'application/octet-stream');
    res.send(connack);
});

module.exports = router;
