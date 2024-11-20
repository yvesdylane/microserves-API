// productServer.js
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg');
const productRoutes = require('./routes/productRoutes');
dotenv.config({ path: './.env.product' });

const app = express();
const port = process.env.PORT || 5011;

app.use(express.json());

// Product routes
app.use('/api/products', productRoutes);

// PostgreSQL connection
const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_PRODUCT_DB,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(port, () => {
      console.log(`Product service running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to PostgreSQL', err);
  });
