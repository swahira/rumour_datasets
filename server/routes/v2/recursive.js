const express = require('express');
const router = express.Router();

// 1. Linked List Simulation
router.get('/linked-list', (req, res) => {
    res.json({
        id: 1,
        value: "Head",
        next: {
            id: 2,
            value: "Node 1",
            next: {
                id: 3,
                value: "Node 2",
                next: null
            }
        }
    });
});

// 2. Tree Structure
router.get('/tree', (req, res) => {
    res.json({
        name: "Root",
        children: [
            { name: "Child A", children: [{ name: "Grandchild A.1" }] },
            { name: "Child B", children: [] }
        ]
    });
});

module.exports = router;
