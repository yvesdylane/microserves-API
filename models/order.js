const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'order_processing_db',
  password: '0524@12',
  port: 5432,
});

const createOrder = async (userId, totalAmount) => {
  const query = 'INSERT INTO orders (user_id, total_amount) VALUES ($1, $2) RETURNING *';
  const result = await pool.query(query, [userId, totalAmount]);
  return result.rows[0];
};

const createOrderItem = async (orderId, productId, quantity, price) => {
  const query = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *';
  const result = await pool.query(query, [orderId, productId, quantity, price]);
  return result.rows[0];
};

module.exports = { createOrder, createOrderItem };
