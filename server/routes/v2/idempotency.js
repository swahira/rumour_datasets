const express = require('express');
const router = express.Router();

let idempotencyStore = {};

router.post('/charge', (req, res) => {
    const key = req.headers['idempotency-key'];
    if (!key) return res.status(400).json({ error: "Idempotency-Key header required" });

    if (idempotencyStore[key]) {
        console.log(`♻️ Idempotency Hit: Returning cached response for key ${key}`);
        return res.status(200).json(idempotencyStore[key]);
    }

    // Simulate new charge
    const response = {
        transaction_id: `txn-${Date.now()}`,
        amount: req.body.amount,
        status: "succeeded",
        timestamp: new Date().toISOString()
    };

    idempotencyStore[key] = response;
    res.status(201).json(response);
});

module.exports = router;
