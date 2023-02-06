function lastIndexOf(array, num) {
  
  for (let i = array.length - 1; i >= 0; i--) { // starts at the end of the array
    if (array[i] === num) {   // looks for the num in the array
      return i; // returns the index position
    }
  }
  
  return -1;
}




console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);