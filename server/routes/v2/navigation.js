const express = require('express');
const router = express.Router();

// 1. Temporary Redirect
router.get('/old-path', (req, res) => {
    res.redirect(302, '/api/v2/navigation/new-path');
});
router.get('/redirect', (req, res) => {
    res.redirect(302, '/api/v2/navigation/new-path');
});

router.get('/new-path', (req, res) => {
    res.json({ message: "You successfully followed the redirect", status: "arrived" });
});

// 2. Strict Versioning (Header Based)
router.get('/versioned-data', (req, res) => {
    const version = req.headers['x-api-version'] || '1.0';
    if (version === '2.0') {
        res.json({ 
            schema: "v2", 
            results: [{ uuid: "v2-123", full_name: "Modern User" }] 
        });
    } else {
        res.json({ 
            schema: "v1", 
            data: [{ id: 1, name: "Legacy User" }] 
        });
    }
});

router.get('/version', (req, res) => {
    const version = req.headers['x-api-version'] || '1.0';
    if (version === '2.0') {
        res.json({ schema: "v2", results: [{ uuid: "v2-123", full_name: "Modern User" }] });
    } else {
        res.json({ schema: "v1", data: [{ id: 1, name: "Legacy User" }] });
    }
});

// 3. Negative: Infinite Loop Protection
router.get('/loop', (req, res) => {
    res.redirect(302, '/api/v2/navigation/loop');
});

module.exports = router;
