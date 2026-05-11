const express = require('express');
const router = express.Router();

const data = [
    { id: 1, name: "Item A", val: 100 },
    { id: 2, name: "Item B", val: 200 }
];

router.get('/data', (req, res) => {
    const accept = req.headers.accept || 'application/json';
    
    if (accept.includes('text/csv')) {
        res.set('Content-Type', 'text/csv');
        const csv = "id,name,val\n" + data.map(i => `${i.id},${i.name},${i.val}`).join('\n');
        return res.send(csv);
    }
    
    if (accept.includes('text/plain')) {
        res.set('Content-Type', 'text/plain');
        return res.send(data.map(i => `${i.id}: ${i.name}`).join(' | '));
    }

    res.json(data);
});

module.exports = router;
