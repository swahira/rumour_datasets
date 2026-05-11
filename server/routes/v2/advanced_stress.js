const express = require('express');
const router = express.Router();

let lastHit = 0;
let retryAttempts = {};
let hitCounts = {};

// 1. Parallel Race Condition Simulation
router.get('/race', (req, res) => {
    const now = Date.now();
    const diff = now - lastHit;
    lastHit = now;

    if (diff < 10 && diff > 0) {
        return res.status(409).json({ error: "Race Condition Detected", diff_ms: diff });
    }
    res.json({ status: "Success", timing: "Safe" });
});

// 2. Adaptive Retry Backoff (Sequence: 503(1s) -> 503(2s) -> 200)
router.get('/retry-backoff', (req, res) => {
    const id = req.query.id || 'default';
    retryAttempts[id] = (retryAttempts[id] || 0) + 1;

    if (retryAttempts[id] === 1) {
        return res.status(503).set('Retry-After', '1').json({ attempt: 1, next: "Retry in 1s" });
    }
    if (retryAttempts[id] === 2) {
        return res.status(503).set('Retry-After', '2').json({ attempt: 2, next: "Retry in 2s" });
    }

    res.json({ status: "Success", attempt: retryAttempts[id], message: "Backoff accepted" });
});

// 3. Resource Limit Hard-Fail
router.get('/quota', (req, res) => {
    const id = req.query.id || 'user-1';
    hitCounts[id] = (hitCounts[id] || 0) + 1;

    if (hitCounts[id] > 5) { // Lowered to 5 for easy testing
        return res.status(410).json({ error: "Quota Exhausted", message: "Resource permanently disabled for this session" });
    }
    res.json({ status: "ok", remaining: 5 - hitCounts[id] });
});

module.exports = router;
