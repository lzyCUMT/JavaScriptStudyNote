/* const jonas = {
firstName: 'Jonas',
    lastName: 'Schmedtmann',
        age: 2037 - 1991,
            job: 'teacher',
                friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastname);
console.log(jonas['lastname']);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
const interstedIn = prompt('what do you what to know about jonas? choose between firstname, lastname, age, job and friends');

if (jonas[interstedIn]) {
    console.log(jonas[interstedIn]);
} else {
    console.log('Wrong request! Choose between irstname, lastname, age, job and friends');
}
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemedtman';
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    riends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-yeas old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};
console.log(jonas.calcAge());
console.log(jonas.getSummary()); */


/*  const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
} */


/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} */


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weights rep ${rep}`);
//     }
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights reprtition ${rep}`);
//     rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }


// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const calcTotal = function (bill, tip) {
//     return bill + tip;
// }
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(calcTotal(bills[i], tips[i]));
// }
// console.log(bills.tips, bills);
