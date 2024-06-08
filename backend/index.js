const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const client = new Client({
  user: 'avnadmin',
  host: 'pg-256b0a50-movie-list-fiap-db.e.aivencloud.com',
  database: 'login',
  password: 'AVNS__sdnuMYOKMeLOEgEc_z',
  port: 18567,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query('SELECT * FROM usuarios WHERE email = $1 AND senha = $2', [email, password]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      res.status(409).json({ message: 'Email already registered' });
    } else {
      await client.query('INSERT INTO usuarios (email, senha) VALUES ($1, $2)', [email, password]);
      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
