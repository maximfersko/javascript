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






/////////////////


let a = 5,
    b = a,

    b = b + 5




//function 
let userName = 'vasyya';

function showMessage() {
    alert('hello ,' + userName);
}

showMessage();
јя


let sum = (a, b) => {
    let result = a * b;
    return result;
};

console.log(sum(523, 504));



const sum = (a, b) => a + b;

console.log(sum(90, 90));

let ask = (question, yes, no) => {
    return confirm(question) ?
        yes() :
        no();
};

ask(
    "Вы согласны?",
    () => {
        alert("Вы согласились.");
    },
    () => {
        alert("Вы отменили выполнение.");
    }
);



let userName = 'vasyya';

function showMessage() {

    alert('hello ,' + userName);

}

showMessage();



let sum = (a, b) => {
    let result = a * b;
    return result;
};

console.log(sum(523, 504));



const sum = (a, b) => a + b;

console.log(sum(90, 90));


let sayHi = () => console.log('hello');

sayHi();


const obj = {
    a: 5,
    b: 1
}

const copy = obj; //ссылка

copy.a = 10;

console.log(copy);
console.log(obj);


/////////////////




//поверностная копия 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};


const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);


////////////////

const oldArrray = ['a', 'b', 'c'];
const newArray = oldArrray.slice();

newArray[1] = 'rdudrdu';

console.log(newArray);
console.log(oldArrray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wprdpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];;

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 6, 7];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
}

const newObj = {
    ...g
};




///////////////////////////


//ООП

let str = "some";

let strObj = new String(str);

console.log(typeof (str));

console(typeof (strObj));

console.dir([1, 2, 3]);



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello!')
    }
};


const john = Object.create(soldier);

/*const john = {
    health:100
};

john.__proto__ = soldier; //устаревший метод 

Object.setPrototypeOf(john, soldier);*/

john.sayHello();




///////////////////////////////







const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '')


        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },

    rememberMyFilms: function () {

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
    },

    detectPersonalMovie() {

        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов ');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('вы классический зритель !');
        } else if (personalMovieDB.count > 30) {
            console.log('вы киноман ');
        } else {
            console.log('произошла ошибка !');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },


    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под ноиером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некоректнные данные или вы не ввели их вообще  ');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },





};





//////////////////////////////////////








function hello() {
    console.log('hello world !!');
}

hello();

function hi() {
    console.log('say hiii !!!');
}

hi();

const arr = [1, 14, 4, 20, 54, ],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);







//////////////////////////////







let x = 5;

alert(x++);

//[ ] + false - null + true

console.log(([] + false - null + true));

let y = 1;

x = y = 2;

console.log(x);

console.log("1" [0]);

console.log([] + 1 + 2);

console.log(2 && 1 && null && 0 && undefined);












////////////////









const test = +prompt('сколько тебе лет ?');
const testSecond = +prompt('чему равно выражение 2 + 2 ?');

const getTest = {
    num: test
};

console.log(getTest);

function ok() {
    if (test || testSecond >= 18) {
        console,
        log('Урааа вам есть 18');
    }
    else if (testSecond != 25) {
        console.log(' yeeeeeahh ');
    } else {
        console.log('kok');
    }
};

ok();


///
///////////




let x = 5;

alert(x++);

//[ ] + false - null + true

console.log(([] + false - null + true));

let y = 1;

x = y = 2;

console.log(x);

console.log("1" [0]);

console.log([] + 1 + 2);

console.log(2 && 1 && null && 0 && undefined); /// запинается на лжи 

console.log(!!(1 && 2) === (1 && 2));









//////////////////










const Day = prompt('как прошел ваш день ?');
const Old = +prompt('Сколько вам лет ?');
const webDay = +prompt('как давно  вы сидите на этом сайте (ответ в днях ) ?');
const Name = prompt('как вас зовут  ?');

const obj = {
    getDay: Day,
    getOld: Old,
    getName: Name,
    web: webDay
};

console.log(obj);


function concept() {

    if (obj.getDay && obj.getOld && obj.getName === 18) {
        console.log('wow!');
    } else if (obj.getOld || obj.web <= 60) {
        console.log('it is works!');
    } else {
        console.log(' ooo ');
    }

};

concept()




const quest = +prompt('how are you old ?');
const one = +prompt('how are you old ?');
const two = +prompt('how are you old ?');
const three = +prompt('how are you old ?');
const four = +prompt('how are you old ?');

const getQuest = [quest, one, two, three, four];

console.log(getQuest);






function hello() {

    alert('hello');
}

hello();












///////////////////








const getBox = {
    data: box,
    butt: buttons

}

console.log(getBox);

const buttons = document.getElementsByTagNameNS('button');

console.log(buttons);

const circles = getElementByClassName('.circle');

console.log(circles);





alert('hello');

const oko = +prompt('kokoko');

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);






do {
    console.log(num);
    num++;
}
while (num < 55);


const num = 50;

for ( let i = 1; i < 8; i++) {
    console.log(i);
    
};


for (let i = 0; i < 3 ; i++) {
    console.log(i);
};

for (let i = 10; i < 30; i++) {
    console.log(i);
};


for (let num = 279; num < 300; num++ ) {
    console.log(num);
};



let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Сумма: ' + sum );


/*let array = [ "яблоко", "слива", "груша", "ананас", ];

console.log(array[2])*/


const questionMovie = prompt('how much you see movie', '');
const newArray = +prompt('what are you doing?', '');


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








//////////////////











//const elem = document.querySelector('.koko');

//elem.forEach(item => {
//  item.remove();
//});




function sayHello() {
    console.log('uho');
}

sayHello();


const number = +prompt('how are you old ?', '');
const accses = confirm('okey ?');

const dataB = {
    quest:number,
    hoko:'íjhoho',
    test:accses
};

function ok() {
    if (dataB.test === true) {
        console.log('true !');
        alert('true');
    } else if (dataB.test === false) {
        alert('false');
        console.log('false')
    }
}

ok();



// котекст вызова this

let user = {
    name: 'vasya',

    sayHi:function() {
        alert(this.name);
    }

}

user.sayHi()



let foho = 'yeees !!';


function context() {
    alert(this.foho);
}




/////////////////////////////////




const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    console.log(e);
});



/////////////










const quest = +prompt('сколько тебе лет ?');
const one = +prompt('рандомное число ?');
const two = +prompt('сколько тебе лkok ?');


const obj = {
    first:quest,
    two:one,
    three:two
}


console.log(obj.first)



const mas = [5, 7, 7, 9];


const btn = document.querySelector('#firstBtn')

btn.addEventListener('click', () => {
    const secondQuest = +prompt('рандомное число ?')
})


const cli = document.querySelector('#secondBtn')

cli.addEventListener('click', () => {
    alert(obj.first)
});

const conditions = function  () {
    if (obj.first === 18) {
        alert('вам есть 18!!')
    } else if (obj.first < 18) {
        alert('вам нет 18 !!')
    } else if (obj.first >= 18) {
        alert('вам больше 18!!')
    }
}

console.log(conditions)

const questionNum = +prompt('Введите любое число.');
const questionSecondNum = +prompt('Введите второе любое число.')

const dataBase = {
    oneQuest: questionNum,
    twoQuestion:questionSecondNum
}





function num(oneQuest, twoQuestion) {
    return a * b
}

console.log(num(5,8));











/*const il = document.querySelectorAll('input')

il.addEventListener('focus', () => {
    alert('ok!')
})


const cli = document.querySelector('#secondBtn')

cli.addEventListener('click', () => {
    function num(a, b) {
        return a + b
    }
    alert(num(a, b));
})*/





/////////////////////////





// sum (2,3) == sum (2),(3) == 5

function sum(a, b) {
    if (b) {
        return a + b
    }

    return  function (c) {
        return a + c
    }
}

console.log(sum(2, 3))
console.log(sum(2)(3))




//////////////////////
