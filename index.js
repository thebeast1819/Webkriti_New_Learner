const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
const {Pool} = require('pg')
const app = express()
const port = process.env.PORT || 3000

const dotenv=require("dotenv")
dotenv.config()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const databaseConfig = { connectionString: process.env.DATABASE_URL };
const pool = new Pool(databaseConfig);

pool.on('connect', () => {
console.log('connected to database');
});

app.post('/signup', (req, res) => {
  console.log(req.body)
  res.json({
      success: true,
      message: "message received"
  })
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})