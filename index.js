const userInput = prompt(
  "Enter froyo flavors separated by commas (vanilla, strawberry, coffee):"
);

console.log("userInput:", userInput);

const flavorsArray = userInput.split(",");
console.log("flavorsArray:", flavorsArray);

//*const flavorsArray = [ manually entered array. 
  //*"vanilla",
  //*"vanilla",
  //*"vanilla",
  //*"strawberry",
  //*"coffee",
  //*"coffee"
//*];

const flavorCounts = {};

for (const flavor of flavorsArray) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor] += 1;
  } else {
    flavorCounts[flavor] = 1;
  }
}

console.log(flavorCounts);

//6) How should the object be updated as you iterate? As you loop through each flavor in the array:
//If flavor is already a key in the object, increase its count by 1 to go through each loop counting how many are needed
//If its not in the object yet then create that key (FLAVOR) with value 1

//7) Are you using functions to organize your code?
// using fucntion split to parse the  string and turn it into an array. 
// function to count flavors array to object:value

//8) Do your variables and functions have meaningful names?
//userInput (string from prompt)
//flavorsArray (array of flavor strings (V,V,V,S,C,C,)
//flavorCounts (object mapping flavor → count)
//countFlavors() (function that counts)
//parseFlavors() (function that splits)

//9) Is your code formatted?



// EXAMPLE WERE WE ARE DEFINING PAREMETERS AS WELL AS USING AN 'IF' STATEMENT
// const userInput = prompt(
//   "Enter froyo flavors separated by commas (vanilla, strawberry, coffee):"
// );

// // Turn input into array
// const flavorsArray = userInput.split(",");

// // Object to count flavors
// const flavorCounts = {};

// // Loop through orders USING i (index matters here)
// for (let i = 0; i < flavorsArray.length; i++) {
//   const flavor = flavorsArray[i];

//   // COUNTING LOGIC
//   if (flavorCounts[flavor]) {
//     flavorCounts[flavor] += 1;
//   } else {
//     flavorCounts[flavor] = 1;
//   }

//   // SPECIAL RULE: 100th order is free
//   if (i === 99) {
//     console.log("🎉 The 100th order is FREE!");
//     console.log("Free flavor:", flavor);
//   }
// }

// // Log final counts
// console.log("Flavor counts:", flavorCounts);
