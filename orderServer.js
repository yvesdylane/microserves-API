// orderServer.js
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg');
const orderRoutes = require('./routes/orderRoutes');
dotenv.config({ path: './.env.order' });

const app = express();
const port = process.env.PORT || 5012;

app.use(express.json());

// Order routes
app.use('/api/orders', orderRoutes);

// PostgreSQL connection
const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_ORDER_DB,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(port, () => {
      console.log(`Order service running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to PostgreSQL', err);
  });

