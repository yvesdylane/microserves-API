const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const pool = new Pool({
  user: 'postgres', // your database username
  host: 'localhost',
  database: 'user_auth_db',
  password: '0524@12', // your database password
  port: 5432,
});

const createUser = async (fullName, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (full_name, email, password_hash) VALUES ($1, $2, $3) RETURNING *';
  const result = await pool.query(query, [fullName, email, hashedPassword]);
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = { createUser, findUserByEmail };
