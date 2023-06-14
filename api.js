const express = require('express');
const app = express();
const { Client } = require('pg')
const client = new Client({
  user: 'nagp_db',
  host: '10.8.129.111',
  database: 'nagp_db',
  password: 'password',
  port: 80,
})



app.get('/', (req, res) => {

  client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(err);
  });

  const query = 'SELECT * FROM person;'
  client.query(query, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(response);
    var names = "";
    for (let row of response.rows) {
        console.log(row);
        names = names + " "+ row
    }
    res.send(names);

    client.end();
});


});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
