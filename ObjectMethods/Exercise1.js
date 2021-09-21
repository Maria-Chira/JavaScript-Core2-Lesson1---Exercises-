// A person named Alice is defined below.

// Add a method "greet" so this person can say hello.
// Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.
let person = {
  name: "Alice",
  greet: function(){
      return "Hello everybody";
  },
  sayName: function(){
      return `My name is ${this.name}`;
  },
  age: 25,
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
);