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


//Задача №6

const arr = [4, 4, 4, 4];
let duble = true;

for(let i = 0; i < arr.length; i++) {
  for (let x = i + 1; x < arr.length; x++) {
    if (arr[i] !== arr[x]) {
      duble = false;
      break; // если хотя бы одна пара не совпадает, выходим из цикла
    }
  }
  if (!duble) {
    break; // если нашли несовпадение, выходим из внешнего цикла
  }
};

console.log(duble);

//Задача №7

const arr = [4, 8, 15, 16, 23, 42, 0, null, 'какая-то строка'];

function countNumbers(arr) {
    let EvenCount = 0;
    let notEvenCount = 0;
    let ZeroCount = 0;

    arr.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                ZeroCount ++;
            } else if (item % 2 === 0) {
                EvenCount++;
            } else {
                notEvenCount++;
            }
        }
    });

    console.log('Количество чётных элементов:', EvenCount);
    console.log('Количество нечётных элементов:', notEvenCount );
    console.log('Количество нулевых элементов:', ZeroCount);
}

countNumbers(arr);

//Задача №8

const newMap = new Map([
  ['apple', 1],
  ['banana', 2],
  ['orange', 4],
  ['grape', 3]
]);

newMap.forEach((value, key) => {
  console.log(`Ключ — ${key}, значение — ${value}`);
});
