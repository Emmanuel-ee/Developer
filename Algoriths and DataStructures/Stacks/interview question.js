let stack = [];

function addMovie(movieNumber) {
  let position = stack.length;
  stack.push(movieNumber);
  return position;
}

function removeMovie(movieNumber) {
  let position = stack.indexOf(movieNumber);
  let moviesAbove = stack.length - position - 1;
  stack.splice(position, 1);
  stack.push(movieNumber);
  return moviesAbove;
}

// Example usage:
addMovie(3);
addMovie(2);
addMovie(1);
removeMovie(3)
removeMovie(1)
removeMovie(1)

