const express = require('express');
const app = express();
const { Client } = require('pg')
const client = new Client({
  user: process.env.db_user_name,
  host: process.env.db_hostname,
  database: process.env.db_name,
  password: process.env.db_password,
  port: process.env.db_port,
})



app.get('/', (req, res) => {
  console.log(process.env);
  console.log(client.user);
  console.log(client.password);

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
    console.log(response)
    var names = ""
    for (let row of response.rows) {
        console.log(row);
        names = names + " "+ row.name
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
