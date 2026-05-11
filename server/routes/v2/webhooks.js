const express = require('express');
const router = express.Router();
const axios = require('axios');

let webhookConfig = null;

// 1. Register Webhook
router.post('/register', (req, res) => {
    const { target_url, events } = req.body;
    if (!target_url) return res.status(400).json({ error: "target_url required" });
    
    webhookConfig = { target_url, events };
    res.status(201).json({ status: "Webhook registered", config: webhookConfig });
});

// 2. Trigger Webhook Event
router.post('/trigger', async (req, res) => {
    if (!webhookConfig) return res.status(404).json({ error: "No webhook registered" });
    
    const eventData = { event: "resource.created", id: Date.now() };
    
    // Simulate async dispatch
    console.log(`📡 Dispatching webhook to: ${webhookConfig.target_url}`);
    try {
        await axios.post(webhookConfig.target_url, eventData);
        res.json({ message: "Webhook dispatched", data: eventData });
    } catch (e) {
        res.status(502).json({ error: "Failed to dispatch webhook", detail: e.message });
    }
});

module.exports = router;
