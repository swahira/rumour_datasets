const express = require('express');
const router = express.Router();

// Mock Data
const data = {
    user: { id: "u-101", name: "GQL Master", posts: [{ id: "p-1", title: "Hello GQL" }] }
};

router.post('/', (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "No query provided" });
    
    // Simulate GQL Parsing (Query)
    if (query.includes('user')) {
        return res.json({
            data: { user: data.user }
        });
    }
    
    // Simulate GQL Parsing (Mutation)
    if (query.includes('createPost')) {
        // Extract title from query string if not in variables
        const titleMatch = query.match(/title:\s*\\?"([^\\"]+)\\?"/);
        const title = titleMatch ? titleMatch[1] : "Untitled Post";
        
        const newPost = { id: `p-${Date.now()}`, title: title };
        return res.json({
            data: { createPost: newPost }
        });
    }

    res.status(400).json({ errors: [{ message: "Unknown query" }] });
});

module.exports = router;
