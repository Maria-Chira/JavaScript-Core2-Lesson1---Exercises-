// Write code in the space provided so that the expected values output

// It should output: Rex true

// let dog = {
//   name: "Billy",
//   wantsToPlay: false,
// };

// // WRITE CODE BELOW THIS LINE

// // WRITE CODE ABOVE THIS LINE

// console.log(dog.name);
// console.log(dog.wantsToPlay);

// // -> it should output:
// // Rex
// // true

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// dog.name = "Rex";
// dog.wantsToPlay = true;

dog["name"] = "Rex";
dog["wantsToPlay"] = true;

console.log(dog.name);
console.log(dog.wantsToPlay);