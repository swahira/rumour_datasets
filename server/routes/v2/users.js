const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'dev_lead', role: 'lead', team: 'alpha' },
    { id: 2, username: 'intern_1', role: 'intern', team: 'alpha' },
    { id: 3, username: 'manager_x', role: 'manager', team: 'beta' }
];

// 1. Search & Filtering (Query Param Stress)
router.get('/', (req, res) => {
    const { role, team, search } = req.query;
    let filtered = users;
    if (role) filtered = filtered.filter(u => u.role === role);
    if (team) filtered = filtered.filter(u => u.team === team);
    if (search) filtered = filtered.filter(u => u.username.includes(search));
    res.json(filtered);
});

router.post('/profile', (req, res) => {
    const { username, email } = req.body;
    if (email === null) return res.status(400).json({ error: 'Email cannot be null' });
    res.json({ ok: true, username });
});

// 2. Hierarchical CRUD
router.post('/', (req, res) => {
    const { username, role } = req.body;
    if (!username) return res.status(400).json({ error: 'Username required' });
    const newUser = { id: users.length + 1, username, role: role || 'user' };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 3. Negative: Conflict (Duplicate Username)
router.post('/register', (req, res) => {
    const { username } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ error: 'User already exists', code: 'USER_CONFLICT' });
    }
    res.json({ success: true });
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const { also_delete_parent } = req.body || {};

    const index = users.findIndex(u => u.id == id);
    if (index !== -1) users.splice(index, 1);

    if (also_delete_parent) {
        const pIndex = users.findIndex(u => u.id == also_delete_parent);
        if (pIndex !== -1) users.splice(pIndex, 1);
    }

    res.status(204).end();
});

module.exports = router;
