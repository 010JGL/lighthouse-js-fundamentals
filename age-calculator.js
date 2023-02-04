function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth; // defines age
  
  return name + " is " + age + " years old."; //returns the value + message of the function
  
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));