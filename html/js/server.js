const path    = require('path');
const express = require('express');
const mysql   = require('mysql2/promise');
const cors    = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

const db = mysql.createPool({
  host:     'localhost',
  port:     2004,
  user:     'root',         // change if your MySQL user is different
  password: 'HI20na25!',
  database: 'portfolio',
  waitForConnections: true,
});

// Create database and table on startup if they don't exist
async function init() {
  const bootstrap = await mysql.createConnection({
    host: 'localhost', port: 2004, user: 'root', password: 'HI20na25!',
  });
  await bootstrap.query('CREATE DATABASE IF NOT EXISTS portfolio');
  await bootstrap.end();

  await db.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100)  NOT NULL,
      last_name  VARCHAR(100)  NOT NULL,
      email      VARCHAR(255)  NOT NULL,
      subject    VARCHAR(100),
      budget     VARCHAR(50),
      message    TEXT          NOT NULL,
      created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('Database ready.');
}

app.post('/api/contact', async (req, res) => {
  const { fname, lname, email, subject, budget, message } = req.body;

  if (!fname || !lname || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    await db.query(
      'INSERT INTO messages (first_name, last_name, email, subject, budget, message) VALUES (?, ?, ?, ?, ?, ?)',
      [fname, lname, email, subject || null, budget || null, message]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

init().then(() => {
  app.listen(3000, () => console.log('Server running at http://localhost:3000'));
}).catch(err => {
  console.error('Failed to connect to MySQL:', err.message);
  process.exit(1);
});
