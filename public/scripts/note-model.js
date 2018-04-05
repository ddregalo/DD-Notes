console.log("NOTE MODEL RUNNING");

"use strict";

(function(exports) {
  function Note(content) {
    this.content = content
  };
  Note.prototype.readNote = function () {
    console.log(`Note Content: ${this.content}`);
    return this.content
  };
  exports.Note = Note;
})(this);
