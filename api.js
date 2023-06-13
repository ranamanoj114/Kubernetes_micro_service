const express = require('express');
const app = express();
const { Client } = require('pg')
const client = new Client({
  user: 'nagp_db',
  host: '10.8.130.18',
  database: 'nagp_db',
  password: 'password',
  port: 80,
})



app.get('/', (req, res) => {
  client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send('Hello from App Engine!');
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
