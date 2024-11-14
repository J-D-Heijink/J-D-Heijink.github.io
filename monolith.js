const express = require('express');
const app = express();
app.use(express.json());

// In-memory database
const users = [{ id: 1, name: 'Alice' }];
const products = [{ id: 1, name: 'Laptop', stock: 10 }];
const orders = [];

// User routes
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// Product routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = { id: products.length + 1, name: req.body.name, stock: req.body.stock };
  products.push(product);
  res.status(201).json(product);
});

// Order routes
app.post('/orders', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const user = users.find((u) => u.id === userId);
  const product = products.find((p) => p.id === productId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  if (product.stock < quantity) {
    return res.status(400).json({ error: 'Not enough stock' });
  }

  product.stock -= quantity;
  const order = { id: orders.length + 1, userId, productId, quantity };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
