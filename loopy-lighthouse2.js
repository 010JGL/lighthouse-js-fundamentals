function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) { // define a loop with i as index, with the parameters from the function
    if (i % multiples[0] === 0 && i % multiples[1] === 0) { // makes the tough condition up top, check if the number can divise with parameters
      console.log(words[0] + words[1]); // prints the word we need
    }
    else if (i % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } 
    else console.log(i); // prints the value of the index were at, then goes back for another loop
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);