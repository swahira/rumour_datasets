const express = require('express');
const router = express.Router();

let resources = { "item-1": { val: "A" }, "item-2": { val: "B" } };
let cascadeMap = { "dept-1": ["team-a", "team-b"] };
let deletedIds = new Set();

// 1. Idempotent Delete
router.delete('/resource/:id', (req, res) => {
    const id = req.params.id;
    if (deletedIds.has(id)) {
        return res.status(204).end(); // Already deleted, still success
    }
    deletedIds.add(id);
    res.status(204).set('X-Resource-Status', 'Deleted').end();
});

// 2. Bulk Patching Simulation
router.post('/bulk-patch', (req, res) => {
    const updates = req.body; // Expecting { id: newVal }
    Object.keys(updates).forEach(id => {
        if (resources[id]) resources[id].val = updates[id];
    });
    res.json({ status: "Bulk Success", current: resources });
});

// 3. Resource Cleanup Hooks (Cascading Delete)
router.delete('/department/:id', (req, res) => {
    const id = req.params.id;
    const children = cascadeMap[id] || [];
    delete cascadeMap[id];
    res.json({ 
        status: "Cascaded", 
        parent_deleted: id, 
        children_cleaned: children 
    });
});

module.exports = router;
