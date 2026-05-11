const express = require('express');
const router = express.Router();
const axios = require('axios');

// In-memory state for battle scenarios
let lastChainIndex = 0;
let createdResources = new Set();

// 1. PROXY: Forward to GoRest.co.in
router.use('/proxy', async (req, res) => {
    const path = req.path;
    const targetUrl = `https://gorest.co.in/public/v2${path}`;
    
    console.log(`BATTLE PROXY -> ${targetUrl}`);
    
    try {
        const response = await axios({
            method: req.method,
            url: targetUrl,
            data: req.body,
            headers: {
                'Authorization': req.headers.authorization,
                'Content-Type': 'application/json'
            },
            validateStatus: () => true
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Proxy failure', message: error.message });
    }
});

// 2. CHAIN TEST: Must call in sequence
router.get('/chain/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index === 0) {
        lastChainIndex = 0;
        return res.json({ message: 'Chain started', next: 1 });
    }
    
    if (index === lastChainIndex + 1) {
        lastChainIndex = index;
        res.json({ message: `Chain link ${index} verified`, next: index + 1 });
    } else {
        res.status(400).json({ 
            error: 'Chain broken', 
            expected: lastChainIndex + 1, 
            received: index 
        });
    }
});

// 3. CHAOS: Random failures
router.get('/chaos', (req, res) => {
    const rand = Math.random();
    if (rand < 0.2) return res.status(500).json({ error: 'Chaos: Internal Server Error' });
    if (rand < 0.4) return res.status(404).json({ error: 'Chaos: Not Found' });
    res.json({ message: 'Chaos: Success', val: rand });
});

// 4. MASSIVE DATA: Stress extraction
router.get('/stress-data', (req, res) => {
    const count = parseInt(req.query.count || 100);
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: i,
            uuid: `uuid-${i}`,
            nested: { key: `val-${i}`, tags: ['a', 'b', i] }
        });
    }
    res.json(data);
});

module.exports = router;
