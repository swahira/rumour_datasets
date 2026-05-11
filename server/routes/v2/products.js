const express = require('express');
const router = express.Router();

let products = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const product = { id: nextId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

router.delete('/:id', (req, res) => {
  const initialLength = products.length;
  products = products.filter(p => p.id != req.params.id);
  if (products.length < initialLength) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
