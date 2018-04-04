(function(exports) {
  function NoteList() {
    this.notesDb = []
  };
  NoteList.prototype.allNotes = function () {
    return this.notesDb;
  };
  exports.NoteList = NoteList;
})(this);
