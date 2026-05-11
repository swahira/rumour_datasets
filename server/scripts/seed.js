const DB = require('../utils/db');

const productsDb = new DB('products');
const usersDb = new DB('users');

const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'];

const mockProducts = [
  { name: 'MacBook Pro', price: 1999, category: 'Electronics', description: 'High-performance laptop' },
  { name: 'T-Shirt', price: 20, category: 'Clothing', description: 'Cotton comfortable wear' },
  { name: 'Coffee Maker', price: 80, category: 'Home & Kitchen', description: 'Brews the best coffee' },
  { name: 'JavaScript: The Good Parts', price: 30, category: 'Books', description: 'Must-read for developers' },
  { name: 'LEGO Set', price: 50, category: 'Toys', description: 'Creative building blocks' },
  { name: 'iPhone 13', price: 999, category: 'Electronics', description: 'Latest smartphone' },
  { name: 'Jeans', price: 60, category: 'Clothing', description: 'Durable denim' },
  { name: 'Air Fryer', price: 120, category: 'Home & Kitchen', description: 'Healthy frying' },
  { name: 'The Clean Code', price: 45, category: 'Books', description: 'A handbook of agile software craftsmanship' },
  { name: 'Board Game', price: 35, category: 'Toys', description: 'Fun for the whole family' },
  { name: 'Monitor 4K', price: 400, category: 'Electronics', description: 'Crisp display' },
  { name: 'Hoodie', price: 45, category: 'Clothing', description: 'Warm and stylish' },
];

const mockUsers = [
  { name: 'Admin User', email: 'admin@example.com', password: 'password123', role: 'admin' },
  { name: 'Test User', email: 'test@example.com', password: '123456', role: 'user' },
  { name: 'Jane Doe', email: 'jane@example.com', password: 'password', role: 'user' },
];

async function seed() {
  console.log('Seeding data...');
  
  // Clear existing data
  await productsDb.write([]);
  await usersDb.write([]);

  // Insert mock data
  for (const product of mockProducts) {
    await productsDb.insert(product);
  }

  for (const user of mockUsers) {
    await usersDb.insert(user);
  }

  console.log('✔ Data seeded successfully!');
}

seed().catch(err => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
