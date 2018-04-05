// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>SINGLE NOTE VIEW TESTS</b></p>";

// Tests that SingleNoteView has noteToView property that is a note model object
function testSingleNoteViewHasNote() {
  document.getElementById("result").innerHTML += "Test Single Note View // noteToView property is a note model object:</br>";
  let note = new Note("Checkmate 1-2 1-2!!");
  let singleNoteView = new SingleNoteView(note);
  test.isEqual(singleNoteView.noteToView.content === "Checkmate 1-2 1-2!!");
};
testSingleNoteViewHasNote();

// Tests that SingleNoteView convertHtml function returns a html string with note content
function testSingleNoteViewConvertHtml() {
  document.getElementById("result").innerHTML += "Test Single Note View // convertHtml function returns html string:</br>";
  let note = new Note("Checkmate 1-2 1-2!!");
  let singleNoteView = new SingleNoteView(note);
  test.isEqual(singleNoteView.convertHtml() === "<div>Checkmate 1-2 1-2!!</div>");
};
testSingleNoteViewConvertHtml();
