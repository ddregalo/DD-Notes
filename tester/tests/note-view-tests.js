// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>NOTE VIEW TESTS</b></p>";
// Tests that printNotes function prints a html string of all notes - case no notes
function testNoteListViewSendsHtmlStringNoNotes() {
  document.getElementById("result").innerHTML += "Test NoteListView // NoteListView printNotes method sends HTML string of all notes:</br>";
  document.getElementById("result").innerHTML += "Case // 0 notes in notelist model:";
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  test.isEqual(noteListView.printNotes() === "<ul><li><div></div></li></ul>");
};
testNoteListViewSendsHtmlStringNoNotes();

// Tests that printNotes function prints a html string of all notes - case 1 note
function testNoteListViewSendsHtmlStringOneNote() {
  document.getElementById("result").innerHTML += "Test NoteListView // NoteListView printNotes method sends HTML string of all notes:</br>";
  document.getElementById("result").innerHTML += "Case // 1 note in notelist model:";
  let noteList = new NoteList();
  noteList.newNote("Checkmate 1-2 1-2!!");
  let noteListView = new NoteListView(noteList);
  test.isEqual(noteListView.printNotes() === "<ul><li><div><a href=\"#note/4\">Checkmate 1-2 1-2!!</a></div></li></ul>");
};
testNoteListViewSendsHtmlStringOneNote();

// Tests that printNotes function prints a html string of all notes - case 2 notes
function testNoteListViewSendsHtmlStringTwoNotes() {
  document.getElementById("result").innerHTML += "Test NoteListView // NoteListView printNotes method sends HTML string of all notes:</br>";
  document.getElementById("result").innerHTML += "Case // 2 notes in notelist model:";
  let noteList = new NoteList();
  noteList.newNote("Checkmate 1-2 1-2!!");
  noteList.newNote("Yessmate Loud & Clear!!!");
  let noteListView = new NoteListView(noteList);
  test.isEqual(noteListView.printNotes() === "<ul><li><div><a href=\"#note/5\">Checkmate 1-2 1-2!!</a></div></li><li><div><a href=\"#note/6\">Yessmate Loud & Clea</a></div></li></ul>");
};
testNoteListViewSendsHtmlStringTwoNotes();

// Tests that printNotes function only prints first 20 characters of note - case 1 note
function testNoteListViewSendsHtmlStringPreview() {
  document.getElementById("result").innerHTML += "Test NoteListView // NoteListView printNotes method sends HTML string of all notes:</br>";
  document.getElementById("result").innerHTML += "Case // 1 note - 20 character preview of note:";
  let noteList = new NoteList();
  noteList.newNote("All The Things I Love: sweets, art and skateboarding");
  let noteListView = new NoteListView(noteList);
  test.isEqual(noteListView.printNotes() === "<ul><li><div><a href=\"#note/7\">All The Things I Lov</a></div></li></ul>");
};
testNoteListViewSendsHtmlStringPreview();
