// This is a general practice file for JavaScript Basics. Please follow the
// instructions thoughout the sheet. Do not uncomment the commented out spaces.
var arr, findTwo, pusher, upFront, remover, copyCat, chopIt, sumIt, evenOdd,
  timesTen, animal, findAge, getKeys, changeName, speechMaker, addKey, keyLoop,
  cars, findModels;

// Arrays

// 1. Create the variable arr and assign it an array with the following list of
// numbers 12, 42, 36, 51, 96
var arr = [12, 42, 36, 51, 96];
// 2. Create a function called findTwo that takes in the arr array and returns
// the value at index 2.
function findTwo (arr){
  return arr[2];
}
// 3. Create a function called pusher that takes in an array and a number and
// positions the number at the end of the array. Return the new array.
function pusher (array, number){
   array.push(number);
  return array;
}
// 4. Create a function called upFront that takes in an array and a number and
// positions the number in beginning of the array. Return the new array.
function upFront (array, number){
  array.unshift(number);
  return array;
}
// 5. Create a function called remover that takes in an array and removes the
// value at the end of the array. Return the new array.
function remover (array, number){
  array.pop(number);
  return array;
}
// 6. Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.
function copyCat() {
  return Array.prototype.slice.call(arguments);
}
var copy1 = copyCat(2, 3);
// 7. Create a function called chopIt that takes in an array and two numbers.
// It deletes the original 3rd index value and inserts the two numbers in it's place.
function chopIt () {
  Array.splice(position,1,newElement1,newElement2);
}
var chop1 = chopIt(3, 1, 10, 11)
// 8. Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.
function sumArray(array) {
  for (var i = 0, length = array.length, sum = 0; i < length; sum += array[index++]
  );
  return sum;
}
// 9. Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator
var evenArray = [];
var oddArray = [];

function evenOdd () {
  for(var i = 0, i <= array.length, i++);
  if(i => i % 2 ===0) {
    return evensArray;    // array comprehensions mdn help???
  }
  else {
    return oddArray;
  }
}
// 10. Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method
function timesTen (num) {
  arr.map(timesTen(num) num * 10);
}
// Objects

// 1. Create an object called animal. Make sure the animal has the following
// keys. (species, name, age, gender, favoriteFood) Also, give the animal a
// method of speech that returns a string that displays what the animal says.
var animal = [
  species: "mammal",
  age: 3,
  gender: "female",
  favoriteFood: "flowers",
  animal.speak (){
    return "ruff!";
  };
]
// 2. Create a function called findAge that takes in an object and returns the
// age key value.
function findAge () {
  for(age in animal) {
    if(animal.hasOwnProperty("age")) {
        var value = animal["age"];
      return animal.age;
    }
}
}
// 3. Create a function called getKeys that takes in an object and returns all
// of the key names (not values!).
function getKeys () {

}
// 4. Create a function called changeName that takes in an object and a name
// value and replaces the object name with the given name value. Return the new object.
var animal.name = "Max";

function changeName () {
  animal.name = "Rex";
}

changeName();
// 5. Create a function called speechMaker that takes in an object and returns
// the response from calling the speech method.
function speechMaker () {
var speechMaker = function() {
    var speechMaker = (animal.speak) {
        return function() {
            return animal.speak();
        };
    }(speechMaker));
    speechMaker.speak = 'ruff';
    return speechMaker;
};
}
var animal.speak = speechMaker();
// 6. Create a function called addKey that takes in an object and adds a new key
// name bedtime and assigns it a value. Return the object.
function addKey () {
  animal.bedtime = "9PM";
}
// 7. Create a function called keyLoop that takes in an object and loops through
// each of the key values. If any of the key values are equal to "monkey", then
// return "There's a monkey!", otherwise return "There's no monkey here!".
function keyLoop(animal) {
      for(var i=0; i<animal.length; i++) {
             if (i === "monkey") {
                 console.log("There's a monkey! ");
                 break;
         console.log("There's no monkey here!");
     }
 }
// Intermediate Arrays and Objects

// 1. Create an array called cars of 3 objects of 3 different cars with the key
// names of make, model, year.
var cars = [
  {
  make: "toyota";
  model: "camery";
  year: 1998},
  {
  make: "volkswagen";
  model: "jetta";
  year: 2005},
  {
  make: "ford";
  model: "mustang";
  year: 1990
  }
];

// 2. Create a function called findModels that takes in an array, loops through
// the array and returns an array of all of the model values of each object.
function findModels (item, index) {
  for( var "model" in cars ) {
    console.log(item["model"])
  }
}
cars.forEach(findModels);

module.exports = {
  arr: arr,
  findTwo: findTwo,
  pusher: pusher,
  upFront: upFront,
  remover: remover,
  copyCat: copyCat,
  chopIt: chopIt,
  sumIt: sumIt,
  evenOdd: evenOdd,
  timesTen: timesTen,
  animal: animal,
  findAge: findAge,
  getKeys: getKeys,
  changeName: changeName,
  speechMaker: speechMaker,
  addKey: addKey,
  keyLoop: keyLoop,
  cars: cars,
  findModels: findModels
}
