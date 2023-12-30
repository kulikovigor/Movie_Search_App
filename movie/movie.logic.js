// Получение get параметра из URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const movieId = urlParams.get('id');

getFilm(movieId) 
    .then(movie => {
         render(movie);
    });


    // getFilm(movieId) 
    // .then(result => {
    //     const movie = result;

    //     console.log(movie);

    //     // render(movie);
    // });

