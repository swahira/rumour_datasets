const express = require('express');
const router = express.Router();

const recorded_responses = {
    "GET:/v1/user/1": { status: 200, body: { id: 1, name: "Recorded John" } },
    "GET:/v1/user/2": { status: 200, body: { id: 2, name: "Recorded Jane" } },
    "POST:/v1/event": { status: 201, body: { status: "Event Replayed" } }
};

router.use((req, res) => {
    const key = `${req.method}:${req.path}`;
    const recorded = recorded_responses[key];
    
    if (recorded) {
        res.status(recorded.status).json(recorded.body);
    } else {
        res.status(404).json({ 
            error: "Not Found in Playback", 
            message: "This specific request was not in the recorded HAR file" 
        });
    }
});

module.exports = router;
