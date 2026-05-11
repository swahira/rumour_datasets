const express = require('express');
const router = express.Router();

// 1. Postman Environment Simulation
router.get('/postman-env', (req, res) => {
    const postmanToken = req.headers['postman-token'];
    const envVar = req.headers['x-postman-env-var'];
    
    if (envVar === 'prod') {
        res.json({ environment: "Production", restricted_access: true });
    } else {
        res.json({ environment: "Development", postman_trace: postmanToken });
    }
});

// 2. Bruno Variable Scoping
router.get('/bruno-vars', (req, res) => {
    const brunoVar = req.headers['x-bruno-var'];
    res.json({ 
        source: "Bruno Compatibility Test", 
        echo_var: brunoVar || "undefined" 
    });
});

module.exports = router;
