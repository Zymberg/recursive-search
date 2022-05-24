function recursiveSearch(arr, target) {
  // use if statement to see if there are element in the array
  if (arr.length === 0) {
    return false;
  }
  // use if statement to check if first element of the array is === to target
  if (arr[0] === target) {
    //if yes, return true
    return true;
  }

//retrun the function by removing the element we already checked from the array
  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
