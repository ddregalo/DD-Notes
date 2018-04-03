let testResult;

let test = {
  isEqual: function(assertationToTest) {
    if (!assertationToTest) {
      testResult = `Test FAILED: ${assertationToTest} is not true.`
      console.log(`The assertion value is ${testResult}`);
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = testResult;
      throw new Error("Test FAILED: " + assertationToTest + " is not true.")
    } else {
      console.log("PASSED");
      document.getElementById("result").style.color = "green";
      document.getElementById("result").innerHTML = "Test PASSED";
    }
  }
};
