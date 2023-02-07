const cars = [  // original array
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

const carPassing = function (cars, speed) {
  let newCar = {   // create a new array with values
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar);  // add the new array to the old
  return cars;   // returns the updated array
};

carPassing(cars, speed);
console.log(cars);