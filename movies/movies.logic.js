const searchInputNode = document.querySelector('#search');
const searchBtnNode = document.querySelector('#search-btn');

const MOVIE_VALIDATION_LIMIT = 100;
const validationMessage = document.querySelector('.validationMessage');


searchBtnNode.addEventListener('click', function() {
    //берем значение
    const searchQuery = searchInputNode.value;

    if(!searchQuery) {
        alert ('Нужно ввести название фильма');
        return;
    }

    // получаем список фильмов и делаем отрисовку
    getFilms(searchQuery)
        //интеграция
        .then(result => {
            const movies = result.Search;

            render(movies);
        });

});

// функция Валидации на проверку длин.названия фильма
function validation () {
    const movieLen = searchInputNode.value.length;

    if (movieLen > MOVIE_VALIDATION_LIMIT)  {
        validationMessage.innerText =  
        `Название фильма больше ${MOVIE_VALIDATION_LIMIT} символов`
        validationMessage.classList.remove('validationMessage_hidden');
        searchBtnNode.setAttribute('disabled', true);
        searchBtnNode.style.opacity = "0.5";
    }
    else {
        validationMessage.classList.add('validationMessage_hidden');
        searchBtnNode.removeAttribute('disabled');
        searchBtnNode.style.opacity = '1';
    }

};

// обработчик для проверки валидации на длин.названия фильма
searchInputNode.addEventListener('input', validation);
