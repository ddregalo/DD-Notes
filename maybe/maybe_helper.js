// Maybe function - to ascertain an expectation
var maybe = {
  isTrue: function(maybeToCheck) {
    if (!maybeToCheck) {
      throw new Error("Maybe failed: " + maybeToCheck + " is absolute bullshit");
    }
  };
};
