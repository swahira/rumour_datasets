const express = require('express');
const router = express.Router();

let resource = { 
    id: "p-200", 
    data: { title: "Draft", tags: ["v1"] },
    archive: []
};

// 1. Advanced JSON Patch (Move/Copy)
router.patch('/resource', (req, res) => {
    const patches = req.body;
    let localState = JSON.parse(JSON.stringify(resource));

    try {
        patches.forEach(op => {
            if (op.op === 'copy') {
                if (op.from === '/data/title' && op.path === '/archive/-') {
                    localState.archive.push(localState.data.title);
                }
            }
            if (op.op === 'move') {
                if (op.from === '/data/tags/0' && op.path === '/data/version') {
                    localState.data.version = localState.data.tags.shift();
                }
            }
        });
        
        resource = localState;
        res.json({ status: "Success", resource });
    } catch (e) {
        res.status(422).json({ error: "Invalid Patch Operation", detail: e.message });
    }
});

module.exports = router;
