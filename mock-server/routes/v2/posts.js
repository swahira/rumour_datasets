const express = require('express');
const router = express.Router();

let posts = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  const post = { id: nextId++, ...req.body };
  posts.push(post);
  res.status(201).json(post);
});

router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

router.delete('/:id', (req, res) => {
  const initialLength = posts.length;
  posts = posts.filter(p => p.id != req.params.id);
  if (posts.length < initialLength) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

module.exports = router;
