const DB = require('../utils/db');
const productsDb = new DB('products');

exports.getProducts = async (req, res) => {
  try {
    let products = await productsDb.findAll();

    // Filtering
    if (req.query.category) {
      products = products.filter(p => p.category === req.query.category);
    }

    // Sorting
    if (req.query.sort) {
      const field = req.query.sort;
      const order = req.query.order === 'desc' ? -1 : 1;
      products.sort((a, b) => {
        if (a[field] < b[field]) return -1 * order;
        if (a[field] > b[field]) return 1 * order;
        return 0;
      });
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    results.total = products.length;
    results.page = page;
    results.limit = limit;
    results.data = products.slice(startIndex, endIndex);

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productsDb.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
    const newProduct = await productsDb.insert({ name, price, category, description });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productsDb.update(req.params.id, req.body);
    if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const success = await productsDb.delete(req.params.id);
    if (!success) return res.status(404).json({ error: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
