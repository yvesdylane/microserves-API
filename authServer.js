// authServer.js
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg');
const authRoutes = require('./routes/authRoutes');
dotenv.config({ path: './.env.auth' });

const app = express();
const port = process.env.PORT || 5010;

app.use(express.json());

// Authentication routes
app.use('/api/auth', authRoutes);

// PostgreSQL connection
const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_AUTH_DB,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(port, () => {
      console.log(`Auth service running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to PostgreSQL', err);
  });
