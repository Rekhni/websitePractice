/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}; 

// #1 
const promoAdv = document.querySelector('.promo__adv');
promoAdv.remove();


// #2
const promoBackground = document.querySelector('.promo__bg'),
      promoGenre = promoBackground.querySelector('.promo__genre');

promoGenre.textContent = 'Драма';

// #3
promoBackground.style = 'background: url(../img/bg.jpg) center center / cover no-repeat;'


// #4  && #5

const promoInteractiveList = document.querySelector('.promo__interactive-list'),
      promoInteractive = document.querySelector('.promo__interactive'),
      movieList = document.createElement('ul');

const sortedMovies = movieDB.movies.sort();  

sortedMovies.forEach((item, i) => {
    let movie = document.createElement('li');
    movie.textContent = `${i+1} ${item}`;
    movie.classList.add('promo__interactive-item');
    movieList.append(movie); 
})

movieList.classList.add('promo__interactive-list');

promoInteractiveList.replaceWith(movieList);






