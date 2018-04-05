// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>NOTE CONTROLLER TESTS</b></p>";

// Tests that NoteController can be instantiated
function testNoteControllerInstantiate() {
  document.getElementById("result").innerHTML += "Test Note Controller // NoteController can be instantiated:</br>";
  let noteList = new NoteList();
  let noteController = new NoteController(noteList);
  test.isEqual(noteController.noteview.notesToPrint[0] === "Checkmate 1-2 1-2!!");
};
testNoteControllerInstantiate();

// Tests that NoteController send an html string to page
function testNoteControllerHtmlString() {
  document.getElementById("result").innerHTML += "Test Note Controller // NoteController printToBrowser function contains html string:</br>";
  let noteList = new NoteList();
  let noteController = new NoteController(noteList);
  test.isEqual(noteController.noteview.printNotes() === "<ul><li><div>Checkmate 1-2 1-2!!</div></li></ul>");
};
testNoteControllerHtmlString();
