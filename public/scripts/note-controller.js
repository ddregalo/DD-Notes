console.log("NOTE CONTROLLER RUNNING");

"use strict";

let notelist = new NoteList();

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
