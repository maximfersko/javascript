'use strict'

/*let array = [ "яблоко", "слива", "груша", "ананас", ];

console.log(array[2])*/


const questionMovie = prompt('how much you see movie');
const newArray = +prompt('what are you doing?');


const arr = {
    name: 'maxim',
    secondName: 'bobrov',
    old: 19,
    gender: 'female',
    DB: newArray
};

console.log(arr);

function num() {
    if (arr.DB < 12) {
        console.log('ít is wooork !');
    } else if (arr.DB > 12) {
        console.log('bruh');
    }else if (arr.DB === 12 ) {
        alert('úihuhiuhiu');
    }
}

num();



const isMovieDB = [questionMovie, 5, 7];

console.log(isMovieDB);


const elem = document.querySelector('.koko');

elem.forEach(item => {
    item.remove();
});




function sayHello() {
    console.log('uho');
}

sayHello();


const number = +prompt('how are you old ?')


const dataB = {
    quest:number
}

console.log(dataB);












