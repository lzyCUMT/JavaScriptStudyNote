const jonas = {
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
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);