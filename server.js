const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('./helpers/uuid');
var noteData = require('./db/db.json');
// const fs = require('fs');

const PORT = process.env.PORT || 3001;
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

app.get('/api/notes', (req, res) => {
    console.log(noteData);
    res.json(noteData);

    console.info(`${req.method} request received to get notes`);
});



app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`); 
    // var noteData;
    const { title, text } = req.body;
   
    if (title && text) {
    const newNote = {
        title,
        text,
        id: uuid(),

    };

    noteData.push(newNote); 
  
    fs.writeFile('./db/db.json',
    JSON.stringify(noteData),
    (writeErr) => writeErr ? console.error(writeErr)
    : console.info('Successfully updated notes!'));
    res.send(noteData);
    }
});

app.delete('/api/notes:id', (req, res) => {
const { id } = req.params;
const deleted = 

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);






  
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //   if (err) {
    //       console.error(err);
    //   } else {
    //      let parsedNotes = JSON.parse(data)
  
    //      parsedNotes.push(newNote);
  
    //       noteData = parsedNotes;
    