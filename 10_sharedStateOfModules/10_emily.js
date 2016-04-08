var movies = require('./10_movies');
//movies.favMovie = 'Notebook';
//console.log('Emily movie: ' + movies.favMovie);

var emilyMovies = movies();
emilyMovies.favMovie = 'Notebook';
console.log('Emily movie: ' + emilyMovies.favMovie);