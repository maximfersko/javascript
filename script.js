'use strict'

const cli = document.querySelector('#firstBtn')

cli.addEventListener('click', () => {
    alert('koko')
})

const num = +prompt('how?');
const secondNum = prompt('what ?')


const object = {
    firstStorage:num,
    secondStorae:secondNum,
}

console.log(object)

 function mun(a, b) {
    return a + b
    console.log(7, 8)
}

const  mono = [8, 9, 9, 9]

console.log(sorted(mono))