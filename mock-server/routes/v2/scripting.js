const express = require('express');
const router = express.Router();
const crypto = require('crypto');

let globalState = {};

// 1. Pre-Request Script Simulation
router.post('/validate-pre', (req, res) => {
    const computedHeader = req.headers['x-rumour-computed'];
    const expected = crypto.createHash('md5').update(JSON.stringify(req.body)).digest('hex');
    
    if (computedHeader === expected) {
        res.json({ status: "Success", message: "Pre-request calculation verified" });
    } else {
        res.status(400).json({ error: "Pre-request calculation mismatch", received: computedHeader, expected });
    }
});

// 2. Global Propagation
router.post('/set-global', (req, res) => {
    const { key, val } = req.body;
    globalState[key] = val;
    res.json({ status: "Propagated", key, val });
});

router.get('/get-global/:key', (req, res) => {
    const val = globalState[req.params.key];
    if (!val) return res.status(404).json({ error: "Global variable not found" });
    res.json({ key: req.params.key, val });
});

module.exports = router;
