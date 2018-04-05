console.log("NOTELIST VIEW RUNNING");

"use strict";

(function(exports) {
  function NoteListView(notelist) {
    this.notesToPrint = []
    for (let i=0; i < notelist.notesDb.length; i++) {
      this.notesToPrint.push(notelist.notesDb[i].content);
    }
  };
  NoteListView.prototype.printNotes = function () {
    let returnString = "<ul><li><div>";
    returnString += this.notesToPrint.join("</div></li><li><div>");
    returnString += "</div></li></ul>";
    console.log(`Return string from print notes: ${returnString}`)
    return returnString;
  };
  exports.NoteListView = NoteListView;
})(this);
