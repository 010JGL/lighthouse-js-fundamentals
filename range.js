function range(start, end, step) {
  let rangeArray = []; // create an array to push data to
  if (start === "undefined" || end === "undefined" || step === "undefined" || start >= end || step <= 0) { // conditions to follow
    return [];
  } 
  else {
    for (let i = start; i <= end; i += step) { // define starting point,stops when start is lower or = to end, then add step to i
      rangeArray.push(i); // push the value to an array
    }
    return rangeArray;
  }

}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));