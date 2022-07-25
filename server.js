const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('./helpers/uuid');
var noteData = require('./db/db.json');
// const fs = require('fs');

const PORT = process.env.PORT || 3000;
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

    // console.info(`${req.method} request received to get notes`);
});

//GET request for specific note
// app.get('/api/notes/:id', (req, res) => {
//     if (req.body && req.params.noteData_id) {
//         console.info(`${req.method} request recieved for single note`);
//         const noteId = req.params.noteData_id;
//         for(let i = 0; i < noteData.length; i++){
//             const currentNote = noteData[i];
//             if(currentNote.noteData_id === noteId){
//                 res.json(currentNote);
//                 return;
//             }
//         }
//         res.json('Note not found');
//     }
// });

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
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //   if (err) {
    //       console.error(err);
    //   } else {
    //      let parsedNotes = JSON.parse(data)
  
    //      parsedNotes.push(newNote);
  
    //       noteData = parsedNotes;
    noteData.push(newNote); 
  
      fs.writeFile('./db/db.json',
      JSON.stringify(noteData),
      (writeErr) => writeErr ? console.error(writeErr)
      : console.info('Successfully updated notes!')
      );
    }
  });
  
          console.log(response);
          res.send(noteData);
        
    

// app.delete()



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);






