//Задача №1

let input = prompt('Поле для ввода значения');
let number = +input;
if (!isNaN(number) && typeof number === 'number') {
  if ( number % 2 === 0 ) {
    console.log('Четное число:' + number);
  } else{
    console.log('Не четное число' + number);
    } 
} else{
  console.log('Упс, кажется, вы ошиблись');
}

//Задача №2

let x = 'значение';
if (typeof x === 'number') {
  console.log(x + "- число");
} else if(typeof x === 'string'){
  console.log('"' + x + '"' + "-строка");
} else if(typeof x === 'boolean'){
  console.log(x + "- булевое значение");
} else if(typeof x === 'undefined'){
  console.log(x + "- Тип x не определён");
}

//Задание №3

let str = 'hellow world'; //задаем строку
let strreverse = str.split(''); // разбиваем на отдельные буквы
strreverse.reverse(); //делаем реверс
let newstr = strreverse.join(''); //объединяем в строку
console.log(newstr); // вывод в консоль

//Задание №4

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//Задание №5

const arr = [4, 8, 15, 16, 23, 42];

console.log('Количество элементов массива:', arr.length);

console.log('Каждый элемент массива:');
arr.forEach(element => console.log(element));

