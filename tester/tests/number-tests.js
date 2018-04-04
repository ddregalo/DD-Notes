// TESTER unit tests

// Dummy test to practise writing tests - files related to Number
function testNumberIsEqualTo10() {
  document.getElementById("result").innerHTML += "Dummy Test // Number is equal to 10:";
  let number = new Number();
  test.isEqual(number.value === 10);
};
testNumberIsEqualTo10();
