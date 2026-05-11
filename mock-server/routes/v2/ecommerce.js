const express = require('express');
const router = express.Router();

let products = [
    { id: 1, name: 'Quantum Laptop', price: 2500 },
    { id: 2, name: 'Neural Phone', price: 1200 }
];
let orders = [];
let idempotencyKeys = new Set();

// 1. Pagination & Filtering
router.get('/products', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const start = (page - 1) * limit;
    res.json({
        data: products.slice(start, start + limit),
        meta: { total: products.length, page, limit }
    });
});

// 2. Stateful CRUD
router.post('/products', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(210).json(newProduct);
});

// 3. Idempotency Testing
router.post('/orders', (req, res) => {
    const key = req.headers['x-idempotency-key'];
    if (!key) return res.status(400).json({ error: 'Idempotency key required' });
    
    if (idempotencyKeys.has(key)) {
        return res.status(409).json({ error: 'Conflict: Order already processed with this key' });
    }
    
    const order = { id: orders.length + 1, ...req.body, key };
    orders.push(order);
    idempotencyKeys.add(key);
    res.status(201).json(order);
});

// 4. Data Validation / Schema Failures
router.post('/validate', (req, res) => {
    const { email, quantity } = req.body;
    if (!email || !email.includes('@')) return res.status(422).json({ error: 'Invalid email format' });
    if (quantity < 1) return res.status(422).json({ error: 'Quantity must be at least 1' });
    res.json({ success: true });
});

module.exports = router;
