const judgeVegetable = function (vegetables, metric) {  // Have to double check this again
  let high = 0;  // create a variable to have something to compare with
  let posi = 0;   // create a variable to store position
  for (let i = 0; i < vegetables.length; i++) {  // loop over the whole array
    if (vegetables[i][metric] > high) {  // compares the metric value with the previous one
      high = vegetables[i][metric];  // if higher changes the value of high
      posi = i;
    }
  }
  return vegetables[posi].submitter; // returns the right submitter with position value
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(vegetables, metric);

console.log(judgeVegetable);