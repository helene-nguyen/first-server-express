//!import express module
const express = require('express');
const app = express();
const port = 3000

//app.get method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} on http://localhost:${port}..`)
}); 