'use strict'


const Day = prompt('как прошел ваш день ?');
const Old = +prompt('Сколько вам лет ?');
const webDay = prompt('как давно  вы сидите на этом сайте (ответ в днях ) ?');
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

concept();






function hello() {

    alert('hello');
}

hello();