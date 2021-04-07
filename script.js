'use strict'


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