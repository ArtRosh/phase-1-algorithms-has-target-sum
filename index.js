function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const difference = target - number;

    if (seenNumbers.has(difference)) {
      return true;
    }

    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

  O(n) - we loop through the array once
  
*/

/* 
  Add your pseudocode here

create an empty set to store seen numbers

loop through each number in the array
  calculate the difference between the target and the current number
  if the difference is in the set, return true
  add the current number to the set

  if the loop without finding a pair, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
