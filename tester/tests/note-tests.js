// Tests that the string passed into a new Note instatnce
// is equal to the content property
function testNoteContentIsReadable() {
  document.getElementById("result").innerHTML += "Test // Can see content property of Note with readNote function:";
  let note = new Note("Checkmate 1-2 1-2!!");
  test.isEqual(note.readNote() === "Checkmate 1-2 1-2!!");
};
testNoteContentIsReadable();

// Tests that the noteList property in NoteList is an array
function testNoteListIsArray() {
  document.getElementById("result").innerHTML += "Test // NoteList is an array (in this case empty):";
  let noteList = new NoteList();
  test.isEqual(noteList.allNotes() === noteList.notesDb);
};
testNoteListIsArray();
