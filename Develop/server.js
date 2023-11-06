// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => {
    const notesPage = fs.readFileSync(path.join(__dirname, 'public', 'notes.html'), 'utf8');
    res.send(notesPage);
});

app.get('*', (req, res) => {
    const indexPage = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
    res.send(indexPage);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body; 
  newNote.id = uuidv4(); 

  const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8'));
  notesData.push(newNote); 
  fs.writeFileSync(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notesData, null, 2), 'utf8');

  res.json(newNote); 
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
