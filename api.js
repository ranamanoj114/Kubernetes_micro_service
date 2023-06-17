const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.db_user_name,
  host: process.env.db_hostname,
  database: process.env.db_name,
  password: process.env.db_password,
  port: process.env.db_port,
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Web service 
app.get('/', (req, res) => {
  pool.query('SELECT * FROM person;', (error, results) => {
    if (error) {
      console.log(error)
      throw error
    }
    res.status(200).json(results.rows)
  })
});


// Service to create table and insert data for purpose of assignment testing.
// Web service 
app.get('/create', (req, res) => {
  pool.query('CREATE TABLE IF NOT EXISTS person(name VARCHAR(100));', (error, results) => {
    if (error) {
      console.log(error)
      throw error
    }
    console.log("Table created successfully");
  })

    let query = "INSERT INTO person (name) VALUES ('Amit'), ('Ram'), ('AKASH'), ('Pratik'), ('Shayam'), ('Rohan'), ('Teena'), ('Meena');";
    pool.query(query, (error, rows) => {
      if (error) {
        console.log(error)
        throw error;
      }
      console.log("All Rows Inserted");
      res.send("All Rows Inserted");
      });
});
//--------------------------------------------------------------------------


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
