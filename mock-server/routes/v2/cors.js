const express = require('express');
const router = express.Router();

// CORS Mock
router.options('/restricted', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://trusted-rumour.com');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'X-Rumour-Custom');
    res.status(204).send();
});

router.get('/restricted', (req, res) => {
    const origin = req.headers.origin;
    if (origin === 'http://trusted-rumour.com') {
        res.json({ message: "Allowed by CORS", origin: origin });
    } else {
        res.status(403).json({ 
            error: "CORS Violation", 
            message: "Origin not whitelisted",
            received: origin 
        });
    }
});

module.exports = router;
