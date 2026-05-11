const express = require('express');
const router = express.Router();

let resource = { id: "p-100", name: "Original Name", tags: ["alpha"] };

// 1. JSON Patch Endpoint
router.patch('/resource', (req, res) => {
    const patches = req.body;
    if (!Array.isArray(patches)) return res.status(400).json({ error: "Patch body must be an array (RFC 6902)" });

    let localState = JSON.parse(JSON.stringify(resource));
    
    try {
        patches.forEach(op => {
            if (op.op === 'replace') {
                if (op.path === '/name') localState.name = op.value;
            }
            if (op.op === 'add') {
                if (op.path === '/tags/-') localState.tags.push(op.value);
            }
            if (op.op === 'test') {
                if (localState.id !== op.value) throw new Error("Test failed");
            }
        });
        
        resource = localState;
        res.json({ status: "Patched", current: resource });
    } catch (e) {
        res.status(409).json({ error: "Patch Conflict", detail: e.message });
    }
});

module.exports = router;
