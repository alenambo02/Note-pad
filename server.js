const express = require('express');
const fs = require('fs');
const path = require('path');
const termData = require('./db/db.json');
// const fs = require('fs');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

















// (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {