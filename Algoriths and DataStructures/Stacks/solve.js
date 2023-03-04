function run(n, m, movies) {
  /*
   * Write your code below; return type and arguments should be according to the problem\'s requirements
   */
  let stack = [];
  movies_array = [];
  for (let i = 0; i < n; i++) {
    stack[i] = n - i; //comment this line and uncomment the lines below to use the reverse method.
    // stack[i] = i+1;
  }
//   stack.reverse();
//   console.log(stack)

  for (let j = 0; j < m; j++) {
    let position = stack.indexOf(movies[j]);
    let moviesAbove = stack.length - position - 1;
    stack.splice(position, 1);
    stack.push(movies[j]);
    movies_array.push(moviesAbove);
  } 
  return movies_array.join(",");
}

console.log(run(5, 3, [4, 2, 2]))
