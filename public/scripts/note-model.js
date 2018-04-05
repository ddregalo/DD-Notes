console.log("NOTE MODEL RUNNING");

"use strict";

(function(exports) {
  let idCount = 0;
  function Note(content) {
    this.id = idCount++;
    this.content = content
    console.log(this.id);
  };
  Note.prototype.readNote = function () {
    console.log(`Note Content: ${this.content}`);
    return this.content
  };
  exports.Note = Note;
})(this);
