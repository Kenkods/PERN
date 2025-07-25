// test.js
import pool from './db.js';

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL at:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Connection error:', err);
  }
};

testConnection();
