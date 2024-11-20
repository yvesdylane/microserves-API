const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product_catalogue_db',
  password: '0524@12',
  port: 5432,
});

const createCategory = async (name, description) => {
  const query = 'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *';
  const result = await pool.query(query, [name, description]);
  return result.rows[0];
};

const createProduct = async (name, description, price, stockQuantity, categoryId) => {
  const query = 'INSERT INTO products (name, description, price, stock_quantity, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const result = await pool.query(query, [name, description, price, stockQuantity, categoryId]);
  return result.rows[0];
};

module.exports = { createCategory, createProduct };
