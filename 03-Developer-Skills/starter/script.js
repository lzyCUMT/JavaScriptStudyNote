// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof temp[i] !== "number") {
//       continue;
//     }
//     if (temp[i] > max) max = temps[i];
//   }
//   for (let i = 0; i < temps.length; i++) {
//     if (temp[i] < min) min = temps[i];
//   }
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")),
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const data1 = [17, 21, 23];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast([12, 5, -5, 0, 4]);
