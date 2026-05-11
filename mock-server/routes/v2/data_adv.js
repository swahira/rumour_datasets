const express = require('express');
const router = express.Router();

// 1. GeoJSON Structure
router.get('/geo', (req, res) => {
    res.json({
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: { type: "Point", coordinates: [102.0, 0.5] },
                properties: { name: "Checkpoint Alpha" }
            },
            {
                type: "Feature",
                geometry: { type: "Polygon", coordinates: [[[100,0],[101,0],[101,1],[100,1],[100,0]]] },
                properties: { name: "Restricted Zone" }
            }
        ]
    });
});

// 2. MessagePack Simulation (Binary JSON)
router.get('/msgpack', (req, res) => {
    res.set('Content-Type', 'application/x-msgpack');
    // Simple simulated binary pack for "id: 1, val: ok"
    const packed = Buffer.from([0x82, 0xA2, 0x69, 0x64, 0x01, 0xA3, 0x76, 0x61, 0x6C, 0xA2, 0x6F, 0x6B]);
    res.send(packed);
});

module.exports = router;
