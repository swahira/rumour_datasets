const express = require('express');
const router = express.Router();

let regionStatus = "PRIMARY_ACTIVE";

// 1. DNS Failover Simulation
router.get('/service', (req, res) => {
    if (req.query.simulate_fail === 'true') {
        regionStatus = "FAILOVER";
    }

    if (regionStatus === "FAILOVER") {
        return res.status(307).set('Location', 'http://localhost:3000/api/v2/failover/secondary-region').end();
    }
    res.json({ status: "Active", region: "Primary" });
});

router.get('/secondary-region', (req, res) => {
    res.json({ status: "Failover Active", region: "Secondary", note: "Primary is currently degraded" });
});

// 2. Multiplexed Stream Simulation (Mixed content types in one stream)
router.get('/multiplex', (req, res) => {
    res.set('Content-Type', 'multipart/mixed; boundary=stream_boundary');
    res.write(`--stream_boundary\r\nContent-Type: application/json\r\n\r\n{"log": "Handshake started"}\r\n`);
    setTimeout(() => {
        res.write(`--stream_boundary\r\nContent-Type: application/json\r\n\r\n{"data": "Final Result"}\r\n--stream_boundary--`);
        res.end();
    }, 500);
});

module.exports = router;
