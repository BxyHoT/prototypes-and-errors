/**
 * Человек.
 * @param {string} name
 */
function Person(name, movie = []) {
  // Код тут.
  this.name = name;
  this.watchedMovies = movie;
  this.watchedMovies.toString = function () {
    let watchedMoviesString = "";
    this.forEach((movie, index) => {
      watchedMoviesString += index + 1;
      watchedMoviesString += movie.title;
    });
    return watchedMoviesString;
  };
}

Person.prototype.watchMovie = function (movie) {
  // Код тут.
  movie.play();
  if (!this.watchedMovies.includes(movie)) this.watchedMovies.push(movie);
};

module.exports = { Person };
