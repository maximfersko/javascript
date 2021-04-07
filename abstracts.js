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





//////////////////



// сам делал тест 



const questionFilms = prompt('сколько вам лет ?')


const obj = {

    mon: [],
    answer: questionFilms
}

console.log(obj);

if (questionFilms > 6) {
    console.log("error!");
} else if (questionFilms >= 18) {
    console.log("done!")
}





///////////////////










function first() {
    //do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2)
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок !');
}

learnJS('JavaScript', done);




//////////////////////






const options = {
    naMe: 'test',
    width: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log('test');
    }
}

options.makeTest();



const {
    border,
    bg
} = options.colors;




console.log(Object.keys(options).length);

console.log(options["colors"]["border"])

const inf = {
    myGF: {
        Name: 'ksusha',
        secondName: 'Minaeva',
        old: 14
    },
    colors: white,
    gender: o
}

console.log(Object.keys(inf).length);


//console.log(options.colors.bg);

//delete options.naMe

//console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }

}

console.log(counter);















/////////////////////////////////////////





const arr = [1, 2, 3, 4, 5, 6, 8];

//arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) {
    console.log(value);
}





const arr = [1, 2, 3, 4, 5, 6, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}



arr.forEach(function (item, i, ar) {
    console.log(`${i}: ${item} внутри массива  ${arr}`)
});



//arr.pop();
//arr.push(10);

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) {
    console.log(value);
}




const str = prompt('', '');

const products = str.split(", ");

console.log(products.join('; '));





///////////////////////////////////






const test = [1, 2, 4, 9, 6, 5];

for (i = 0; i < test.length; i++) {
    console.log(test[i]);
}



const oldPeople = [18, 46, 44, 98, 12, 56, 78, 89, 22, 11, 10, 78, 79];

console.log(oldPeople);

for (i = 0; i < oldPeople.length; i++) {
    console.log(oldPeople[i]);
}

const oldPeople = [18, 46, 44, 98, 12, 56, 78, 89, 22, 11, 10, 78, 79];











////////////////////////











const questionForUser = +prompt('how are your old?');

const whatYourName = prompt('what is your name ?');



function getName() {


    if (whatYourName == 25) {
        console.log('kokko');
    } else {
        console.log('yeeeah!')
    }
}

getName();


const object = {
    Name: {},
    old: questionForUser,
    count: {}
}

function transData() {
    if (questionForUser >= 18) {
        console.log(object.old);
        console.log("it is work!!");
    } else if (questionForUser < 18) {
        console.log('oh nooo ');
    }

}

transData();

console.log(object);