const express = require('express');
const fs = require('fs');
const path = require('path');
const termData = require('./db/db.json');
// const fs = require('fs');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//GET route for get started page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for note taking pagr
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);










// (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {