function run(n, m, movies) {
  let stack = [...Array(n).keys()].map((x) => x + 1);
  let result = [];
  if (movies.length === m) {
    for (let movie of movies) {
      let position = stack.indexOf(movie);
      result.push(position);
      stack.splice(position, 1);
      stack.unshift(movie);
    }
  } else {
    console.log(`movies should be ${m} numbers`);
  }
  return result.join(", ");
}

let n = 100;
let m = 4;
let movies = [1, 100, 9, 100];
console.log(run(n, m, movies));

//or

// function locateMovies(n, m, movies) {
//   let stack = [...Array(n).keys()].map(x => x + 1);
//   let positions = new Array(n);
//   for (let i = 0; i < n; i++) {
//       positions[stack[i]] = i;
//   }
//   let result = []
//   for (let movie of movies) {
//       let position = positions[movie];
//       result.push(position);
//       stack.splice(position, 1);
//       stack.unshift(movie);
//       for (let i = position; i < n-1; i++) {
//           positions[stack[i]]--;
//       }
//       positions[movie] = 0;
//   }
//   return result.join(', ');
// }



// This function appears to take three arguments:

// n: a number representing the total number of movies
// m: a number representing the number of movies in the movies array
// movies: an array of integers representing a specific order of movies
// It then creates a stack of movies from 1 to n using the Array.prototype.keys() method, and an empty result array.

// Then it loops through the movies array, and for each movie:

// it finds the position of the movie in the stack using the Array.prototype.indexOf() method,
// pushes the position to the result array,
// removes the movie from the stack using Array.prototype.splice() method,
// and adds the movie to the front of the stack using Array.prototype.unshift() method.
// Finally, it returns the result array joined as a string using Array.prototype.join() method with ', ' as the separator.

// It looks like this function is trying to find the position of a set of movies in a stack of all movies, and then rearranging them based on the order of the input movies array.
// But with the current function the output is not the expected one, the result array will contain only the initial position of the movies in the stack not the position after the change.

// There are several ways to build a web app that utilizes this function, depending on your technical skills and the specific requirements of the app.

// One approach would be to use a JavaScript framework such as React or Angular to build a single-page app (SPA) that calls the locateMovies() function in response to user input.
// The user would input the values of n, m, and movies, and the app would display the result of the function.

// Another approach would be to build a server-side app using a technology such as Node.js and Express. The app would have a form for the user to input the values and submit a request to the server.
// The server would then call the locateMovies() function with the provided values and return the result to the client to be displayed on the page.
