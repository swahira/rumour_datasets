const express = require('express');
const router = express.Router();

// 1. GraphQL Subscription Simulation
router.get('/subscribe', (req, res) => {
    res.set({ 'Content-Type': 'application/json', 'Transfer-Encoding': 'chunked' });
    
    const sendUpdate = (id, val) => {
        const update = JSON.stringify({
            data: {
                monitorUpdates: { id, value: val, __typename: "Update" }
            }
        }) + "\n";
        res.write(update);
    };

    let count = 0;
    const timer = setInterval(() => {
        count++;
        sendUpdate(`update-${count}`, Math.random());
        if (count >= 3) {
            clearInterval(timer);
            res.end();
        }
    }, 1000);
});

module.exports = router;
