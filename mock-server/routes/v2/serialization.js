const express = require('express');
const router = express.Router();

// 1. YAML Simulation
router.get('/yaml', (req, res) => {
    res.set('Content-Type', 'application/x-yaml');
    res.send(`
user:
  id: yaml-user-1
  profile:
    name: "YAML Specialist"
    role: "Architect"
    skills:
      - rust
      - node
    `);
});

// 2. Custom Delimited Format
router.get('/pipe-delimited', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("ID|NAME|STATUS\n101|Collector|Active\n102|Orchestrator|Pending");
});

module.exports = router;
