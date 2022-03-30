function findFirstDuplicate(array) {
  let result = -1;
  for(let i = 0; i < array.length; i ++){
    array[i] === array[i + 1] ? result = array[i] : result
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// 1. write a function named findFirstDuplicate
//   1. takes an array as an argument
// 2. return the first duplicate in the array
// And a written explanation of your solution
// write a function named findFirstDuplicate that takes an array as an argument
//   will need a for loop to loop through array
//   will set the result equal to the default of -1
//   if the first array[i] is equal to the next 
//     then we will reassign the result variable to array[i]
// return the result variable
