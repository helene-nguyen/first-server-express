//!import express module
const express = require('express');

//best practice for express const is app
const app = express();
const port = 3000;

//get request specify location root != route
// '/' is ROUTE, home route we target it
app.get('/', (req, res) => {
    res.send('<h1>Hello world !</h1>');
});

app.get('/contact', (req, res) => {
    res.send('Contact me at : bla bla');
});

app.get('/about', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello my name is Yumi</h1>
        <p>This my first route redirecting on about</p>
        <p>And it's working, so happy !</p>
    </body>
    </html>
    `)
});

app.get('/hobbies', (req, res) => {
    res.send('Coding and practice');
});


//res it's us, from the server that send a response back to the web page

//created server
app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}..`)
}); 