const express = require('express');
const router = express.Router();

let components = { engines: [], chassis: [], assembled: [] };

// 1. Independent Creator A
router.post('/engines', (req, res) => {
    const id = `eng-${Date.now()}`;
    components.engines.push(id);
    res.json({ engine_id: id, status: 'ready' });
});

// 2. Independent Creator B
router.post('/chassis', (req, res) => {
    const id = `cha-${Date.now()}`;
    components.chassis.push(id);
    res.json({ chassis_id: id, status: 'ready' });
});

// 3. Dependent Assembler (Requires both IDs)
router.post('/assemble', (req, res) => {
    const { engine_id, chassis_id } = req.body;
    if (!components.engines.includes(engine_id) || !components.chassis.includes(chassis_id)) {
        return res.status(424).json({ error: 'Failed Dependency', message: 'Engine or Chassis not found in system state' });
    }
    const finalId = `car-${Date.now()}`;
    components.assembled.push(finalId);
    res.json({ vehicle_id: finalId, status: 'complete' });
});

module.exports = router;
