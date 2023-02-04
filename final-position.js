const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) { 
  let position = [0, 0]; // declare starting point
  for (var i = 0; i < moves.length; i++){ // loop from 0, until the end of array, +1 each time
    if (moves[i] == 'north') {
    position[1]++; //change position acording to index [index] ++ add to
  }
    else if (moves[i] == 'west') {
    position[0]--;
  }
    else if (moves[i] == 'east') {
    position[0]++;
  }
    else if (moves[i] == 'south') {
    position[1]--;
  }
  console.log(position);
  
}
return position; // returns the value of the loop outside the function
}


finalPosition(moves);
