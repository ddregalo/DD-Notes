// TESTER unit tests
function testNumberIsEqualTo10() {
  let number = new Number();
  console.log(number.value);
  test.isEqual(number.value === 10);
};
testNumberIsEqualTo10();
