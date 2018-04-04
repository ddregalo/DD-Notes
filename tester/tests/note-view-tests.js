// Test section title
document.getElementById("result").innerHTML += "<p><b>NOTE VIEW TESTS</b></p>";
// Tests that printNotes function prints a html string of all notes
function testNoteListViewSendsHtmlStringNoNotes() {
  document.getElementById("result").innerHTML += "Test NoteListView // NoteListView printNotes method sends HTML string of all notes:";
  let noteList = new NoteList();
  // noteList = noteList.notesDb;
  let noteListView = new NoteListView(noteList);
  test.isEqual(noteListView.printNotes() === "<ul><li><div></div></li></ul>");
};
testNoteListViewSendsHtmlStringNoNotes();
