 /*


 let hasDriverLicense = false;
 const passTest = true;

 if (passTest) hasDriverLicense = true;
 if (hasDriverLicense) console.log('I can drive :D');

//  const interface = 'Audio';
// const private = 534;


// function Declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
   return 2037 - birthYear; 
}


// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 3037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return`${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1988, 'Bob'));


function cutFruitPieces(fruit) {
  return fruit + 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and 
  ${orangePieces} pieces of orange.`;
   return juice;
} 
 console.log(fruitProcessor(2, 3)); 


const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

 const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
 
if (retirement > 0) {
  return retirement;
  console.log(`${firstName} retires in ${retirement}` years);
  return retirement;
} else {
  return -1;
  console.log(${firstName} has already retired 🎉);
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1958, 'Mike'));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
 scoreDolphins = calcAverage(44, 23, 71);
 scoreKoalas = calcAverage(65, 54, 49);


//  Introduction to Array
const friend1 = 'Michael;'
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array[1991, 1984, 2008, 2020];

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1 ]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Peter');
} 


const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill = 0.15 :
  bill * 0.2;
} 

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


const bills = [125, 555, 44];
const tips = [calcTip (bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals =  [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2 ]]


console.log(bills, tips, totals);


const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}; 


const jonas = {firstName: 'Jonas', lastName: 'Schmedtmann', age: 2037 - 1991, job: 'teacher', friends: ['Michael', 'Peter', 'Steven']
}; 
console.log(jonas);

console.log(jonas, lastName);
console.log(jonas[lastName]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas, interestedIn);

if (jonas[interestedIn]) {
  console.log(jonas, interestedIn);
} else{
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // } 

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // } 

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
 
  getSummary: function() {
return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas['calcAge'](1991));
console.log(jonas.getSummary());


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height **2;
    return this.bmi;
  }
};

const john = {
  fullName:'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height **2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
 
// "John Smith's BMI is higher than Mark Miller's (23.9)"


if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

 

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
  
}



const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = []

// console.log(jonas[0]);
// console.log(jonas[0]);
// ...
// console.log(jonas[0]);

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = 4; i < jonas.length - 1; i >= 0) {
  console.log(i, jonas[i]);

  for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    
  }

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
}

while (rep <= 10) {
  
}
*/