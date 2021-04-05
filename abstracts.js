const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреннх фильмов ?', ''),
        b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error!');
        i--;
    }

}


if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов ');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('вы классический зритель !');
} else if (personalMovieDB.count > 30) {
    console.log('вы киноман ');
} else {
    console.log('произошла ошибка !');
}

console.log(personalMovieDB);








///////////////////




function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}


showFirstMessage("hello world !");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 8));
console.log(calc(9, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("hello")
};

logger();

const calc = (a, b) => {
    return a + b
};










/////////////









function calc(a, b) {
    return (a * b);


}

console.log(calc(7, 6));
console.log(calc(10, 10));


const max = {

    firstName: maxim,
    old: 19,
    logger: lon,
}

console.log(max.firstName);


const str = 'testrdytkfyu';

const arr = [
    1, 2, 4
];

console.log(str.toLocaleUpperCase());

let fruit = "some fruit";

console.log(fruit.indexOf("f"));

const logg = "Hello world"

console.log(logg.slice(0, 5));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.3;

console.log(Math.round);


const test = "12.2px";

console.log(parseInt(test));

console.log(parseFloat(test));














/////////////////////






let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '')


    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреннх фильмов ?', ''),
            b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error!');
            i--;
        }

    }
}

rememberMyFilms();



function detectPersonalMovie() {

    if (personalMovieDB.count < 10) {
        console.log('просмотрено довольно мало фильмов ');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('вы классический зритель !');
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман ');
    } else {
        console.log('произошла ошибка !');
    }
}

detectPersonalMovie();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под ноиером ${i}`);

    }
}

writeYourGenres();