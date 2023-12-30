const API_KEY = '54b31671';

//интеграция, экран поиска стучится в базу
function getFilms(searchQuery) {
   return fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
        .then(data => data.json())
};


// передаем id
function getFilm(id) {
    return fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
         .then(data => data.json())
 };

 // i= получение информации о конкретном фильме s= поиск 