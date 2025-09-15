'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstname}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you are millenial, ${firstname}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
