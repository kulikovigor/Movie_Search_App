// делаем Объект с ключами 
const MOVIES_TYPES = {
    movie: 'Фильм',
    series: 'Сериал',
    game: 'Игра'
};

const searchListNode = document.querySelector('#search-list');

function render(movies) {

    let html = '';

    // проверка
    if (!movies) {
        html = 'Нет таких фильмов'
        searchListNode.innerHTML = html;

        return;
    }

// делаем массив проходим по каждому результату спискуи собираем html(фильм)
    movies.forEach(movie => {
        const {
            Poster,
            Title,
            Year,
            Type,
            imdbID
        } = movie;
        
        html += `
            <a href='./movie.html?id=${imdbID}' class ='link'>
            <div class ='movie__list'>
                <img class ='movie__item_img' src=${movie.Poster}/>
                 <div class ='movie__item'>
                <p class ='movie__item_title'>${Title}</p>
                <p class ='movie__item_year'>${Year}</p>
                <p class ='movie__item_type'>${MOVIES_TYPES[Type]}</p>
                 </div>
            </div>
            </a>
        `;
    });

    searchListNode.innerHTML = html;

    localStorage.setItem('movies', JSON.stringify(movies));
   // window.location.href = `movie.html?${urlParams.toString()}`;
}


// const storedResult = sessionStorage.getItem('movies');
//     if (storedResult) {
//         movies = JSON.parse(storedResult);
//         searchListNode.innerHTML = ;
//     } вопрос
