console.log("NOTELIST VIEW RUNNING");

"use strict";

(function(exports) {
  function NoteListView(notelist) {
    this.notesToPrint = []
    for (let i=0; i < notelist.notesDb.length; i++) {
      console.log(`SUBSTRING LESS THAN 20: ${notelist.notesDb[i].content.substring(0, 21)}`);
      this.notesToPrint.push(`<a href="#note/${notelist.notesDb[i].id}">${notelist.notesDb[i].content.substring(0, 20)}</a>`);
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
