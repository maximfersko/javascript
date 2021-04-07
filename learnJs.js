const JavaScript = prompt('Какое «официальное» название JavaScript?“');

if ( JavaScript == 'ECMAScript') {
    console.log('«Верно!»');
}else {
    console.log('«Не знаете? ECMAScript!»');
}



const num = +prompt('number');

if (num > 0 ) {
    console.log('1');
}else if (num < 0) {
    console.log('-1');
}else if (num == 0 ) {
    console.log('0');
}