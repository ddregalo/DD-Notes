console.log("SINGLE NOTE VIEW RUNNING");

"use strict";

(function(exports) {
  function SingleNoteView(note) {
    this.noteToView = note;
  };
  SingleNoteView.prototype.convertHtml = function () {
    let htmlNoteString = `<div>${this.noteToView.content}</div>`;
    return htmlNoteString;
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
