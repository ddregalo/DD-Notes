// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>NOTE + NOTELIST MODEL TESTS</b></p>";
// Tests that the string passed into a new Note instatnce
// is equal to the content property
function testNoteContentIsReadable() {
  document.getElementById("result").innerHTML += "Test Note // Can see content property of Note with readNote function:";
  let note = new Note("Checkmate 1-2 1-2!!");
  test.isEqual(note.readNote() === "Checkmate 1-2 1-2!!");
};
testNoteContentIsReadable();

// Tests that the noteList property in NoteList is an array
function testNoteListIsArray() {
  document.getElementById("result").innerHTML += "Test NoteList // NoteList is an array (in this case empty):";
  let noteList = new NoteList();
  test.isEqual(noteList.allNotes() === noteList.notesDb);
};
testNoteListIsArray();

// Tests that newNote creates and stores a new single note model
function testNewNote() {
  document.getElementById("result").innerHTML += "Test NoteList // NoteList newNote function creates and stores new note model:";
  let noteList = new NoteList();
  let text = "Checkmate 1-2 1-2!!";
  console.log(`NotesDB before newNOte function: ${noteList.allNotes()}`)
  noteList.newNote(text);
  console.log(`NotesDB first array value: ${noteList.notesDb[0]}`)
  test.isEqual(noteList.notesDb[0].content === text);
};
testNewNote();
