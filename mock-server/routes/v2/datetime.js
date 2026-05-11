const express = require('express');
const router = express.Router();

// 1. Multi-Format Timestamps
router.get('/now', (req, res) => {
    const now = new Date();
    res.json({
        iso: now.toISOString(),
        unix: Math.floor(now.getTime() / 1000),
        ms: now.getTime(),
        rfc: now.toUTCString(),
        offset: "+05:30",
        relative: "2 minutes ago"
    });
});

// 2. Date Validation (Strict Format)
router.post('/validate', (req, res) => {
    const { deadline } = req.body;
    // Simple ISO validation
    if (!deadline || isNaN(Date.parse(deadline))) {
        return res.status(422).json({ error: "Invalid date format. Use ISO8601." });
    }
    res.json({ status: "Accepted", processed_at: new Date().toISOString() });
});

module.exports = router;
