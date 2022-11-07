const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors);
app.use(bodyParser.json());

// connect database

const firstDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simpledb',
  port: 3306
});

// check dataBase connected

firstDB.connect(err => {
  if (err) {
    console.error('connect error', err);
    return;
  }
  console.log('data base connected');
});

app.get('/user', (req, res) => {
  console.log(req, 'req');
  console.log(res, 'res');
});

app.listen(3000, () => {
  console.log('server running');
});
