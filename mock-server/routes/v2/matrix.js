const express = require('express');
const router = express.Router();

// 1. Version Matrix (Schema Evolution)
router.get('/data', (req, res) => {
    const version = req.headers['x-api-version'] || '1.0';

    if (version === '1.0') return res.json({ id: 1, user: "Alice" }); // Simple
    if (version === '2.0') return res.json({ id: "u_001", profile: { name: "Alice", age: 30 } }); // Nested
    if (version === '3.0') return res.json({ uuid: "550e8400-e29b", identity: { displayName: "Alice Smith" }, meta: { version: "3.0.1" } }); // Complex

    res.status(400).json({ error: "Unsupported Version" });
});

// 2. Test Run Summary Extraction
router.get('/summary', (req, res) => {
    res.json({
        execution_id: "run-999",
        stats: { passed: 45, failed: 2, skipped: 3 },
        results: [
            { id: "T1", status: "PASS" },
            { id: "T2", status: "FAIL", reason: "Timeout" },
            { id: "T3", status: "PASS" }
        ]
    });
});

module.exports = router;
