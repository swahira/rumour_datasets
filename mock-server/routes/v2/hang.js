const express = require('express');
const router = express.Router();

// 1. Socket Hang Simulation
router.get('/never-respond', (req, res) => {
    console.log("💀 Received request at /never-respond. Hanging indefinitely...");
    // We do NOT call res.send(), res.end(), or res.json().
    // The request will stay open until Rumour's client-side timeout trips.
});

module.exports = router;
