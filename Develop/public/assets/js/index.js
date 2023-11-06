document.addEventListener('DOMContentLoaded', () => {
  const saveNoteButton = document.querySelector('.save-note');
  const newNoteButton = document.querySelector('.new-note');
  const clearButton = document.querySelector('.clear-btn');

  saveNoteButton.addEventListener('click', () => {
    const noteTitle = document.querySelector('.note-title').value;
    const noteText = document.querySelector('.note-textarea').value;


  });

  newNoteButton.addEventListener('click', () => {
    document.querySelector('.note-title').value = '';
    document.querySelector('.note-textarea').value = '';
  });

  clearButton.addEventListener('click', () => {

    document.querySelector('.note-title').value = '';
    document.querySelector('.note-textarea').value = '';
  });
});
