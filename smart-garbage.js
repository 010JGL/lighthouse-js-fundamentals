/*const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  if (keys === 'waste') {
    bins.waste += 1;
  }
  else if (keys === 'recycling') {
    bins.recycling += 1;
  }
  else if (keys === 'compost') {
    bins.compost += 1;
  }
  return bins;
};
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
*/    // what i was trying to do at first but didnt work 

const smartGarbage = function(trash, bins) {   // instead do this
  const keys = Object.keys(bins);  // make a keyword to reference the array
  for (let i of keys) {  // make a loop to check if i is in the list
    if (i === trash) {  // check if i = keyword 
      bins[i]++;      // adds 1 to the correct value in bins array
    }
  }
  return (bins);     // returns the updated value
};

console.log(smartGarbage('recycling', {
  waste: 4,
  recycling: 2,
  compost: 5
}));