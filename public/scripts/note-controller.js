console.log("NOTE CONTROLLER RUNNING");

"use strict";

let notelist = new NoteList();

function showNote(note) {
  document
    .getElementById("app")
    .innerHTML = note;
};

(function(exports) {
  function NoteController(notelist) {
    notelist.newNote("Checkmate 1-2 1-2!!");
    this.noteview = new NoteListView(notelist);
  };
  NoteController.prototype.printToBrowser = function () {
    let htmlString = this.noteview.printNotes();
    document.getElementById("app").innerHTML = `<p>${htmlString}</p>`;
    return htmlString;
  };
  exports.NoteController = NoteController;
})(this);

let noteController = new NoteController(notelist);
noteController.printToBrowser();

makeUrlChangeShowSingleNotePageView();

function makeUrlChangeShowSingleNotePageView() {
  window.addEventListener("hashchange", showSinglePageNote);
};

function showSinglePageNote() {
  console.log(`THE WINDOW LOCATION IS: ${window.location}`);
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  console.log(`GET NOTE FROM URL: ${location.hash.split("#")[1]}`);
  let noteId = location.hash.split("#")[1];
  noteId = noteId[noteId.length - 1];
  console.log(`NOTE ID: ${noteId}`);
  let noteModel = notelist.notesDb[noteId];
  console.log(`NOTE OBJECT TO DISPLAY: ${notelist.notesDb[noteId]}`);
  let noteView = new SingleNoteView(noteModel);
  console.log(`SINGLE NOTE VIEW OBJECT TO DISPLAY: ${noteView}`);
  return noteView.convertHtml();
};

createNewNotePageEvent();

function createNewNotePageEvent() {
  document.getElementById("submit").addEventListener("click", function(event){
    console.log("SUBMIT EVENT LOGGED");
    event.preventDefault();
    let newNoteForm = document.forms.newnote;
    console.log(`New Note Form: ${newNoteForm}`);
    let newNoteFormData = new FormData(newNoteForm);
    console.log(`New Note Form Data: ${newNoteFormData}`);
    let noteText = newNoteFormData.get('new_note_text');
    console.log(`New Note Text From Form: ${noteText}`);
  });

};
