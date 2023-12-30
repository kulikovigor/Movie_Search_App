const movieNode = document.querySelector('#movie');

function render(movie) {
    const {
        Poster,
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot

    } = movie;

    movieNode.innerHTML = `
        <div class="movie_wrapper">
            <img class ='movie__poster' src=${Poster}/>
            <div class ='movie__description'>
            <h1 class ='movie__title'>${Title}</h1>
            <p class ='movie__info'>Год: <span class='print'>${Year}</span></p>
            <p class ='movie__info'>Рейтинг: <span class='print'>${Rated}</span></p>
            <p class ='movie__info'>Дата выхода: <span class='print'>${Released}</span></p>
            <p class ='movie__info'>Продолжительность: <span class='print'>${Runtime}</span></p>
            <p class ='movie__info'>Жанр: <span class='print'>${Genre}</span></p>
            <p class ='movie__info'>Режиссер: <span class='print'>${Director}</span></p>
            <p class ='movie__info'>Сценарий: <span class='print'>${Writer}</span></p>
            <p class ='movie__info'>Актеры: <span class='print'>${Actors}</span></p>
            </div>
        </div>
        <p class ='movie__info'>${Plot}</p>
    `;
};