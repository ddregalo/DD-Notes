(function(exports) {
  function NoteList() {
    this.notesDb = []
  };
  NoteList.prototype.allNotes = function () {
    // for (let i=0; i<this.notesDb.length; i+=1) {
    //   document.getElementById("all_notes").innerHTML +=(this.notesDb[i].content);
    // };
    return this.notesDb;
  };
  NoteList.prototype.newNote = function (text) {
    let note = new Note(text);
    console.log(note);
    return this.notesDb.push(note);
  };
  exports.NoteList = NoteList;
})(this);
console.log(`This is: ${this}`);
