const express = require('express');
const router = express.Router();

// 1. Bulk Operations with 207 Multi-Status
router.post('/bulk', (req, res) => {
    const operations = req.body;
    if (!Array.isArray(operations)) return res.status(400).json({ error: "Input must be an array" });

    const results = operations.map((op, index) => {
        if (op.action === 'fail') {
            return { index, status: 400, error: "Intentional failure" };
        }
        return { index, status: 201, id: `bulk-${index}-${Date.now()}` };
    });

    res.status(207).json({
        summary: { total: operations.length, success: results.filter(r => r.status === 201).length },
        results
    });
});

module.exports = router;
