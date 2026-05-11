const express = require('express');
const router = express.Router();

// 1. CORS Preflight Simulation
router.options('/secure-resource', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, X-Rumour-Custom');
    res.status(204).end();
});

// 2. Deprecation & Sunset Headers
router.get('/v1/legacy-data', (req, res) => {
    res.set('Deprecation', 'true');
    res.set('Sunset', 'Sat, 31 Dec 2026 23:59:59 GMT');
    res.set('Link', '<http://localhost:3000/api/v2/docs>; rel="deprecation"; type="text/html"');
    
    res.json({
        message: "This version is deprecated. Please migrate to /api/v2/.",
        data: "Legacy Item"
    });
});

module.exports = router;
