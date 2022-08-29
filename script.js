'use strict';

/* УРОК 1

const userAnswer = +prompt('Введите температуру в градусах по Цельсию:');
alert(userAnswer + ' градусов по Цельсию = ' + ((9 / 5) * userAnswer + 32) + ' градусов по Фаренгейту');


let name = 'Василий';
let admin = name;
console.log(admin); //в консоль выведет "Василий"

let a = 1000;
let b = '108';
console.log(a + b); //в консоль выведет "1000108", т.к. в результате конкатинации второй операнд тоже приведется к строке

Атрибут async позволяет браузеру загружать js-файлы параллельно с загрузкой страницы, выполненение скрипта произойдет после его загрузки, не дожидаясь полной загрузки страницы
Атрибут defer также позволяет браузеру загружать js-файлы параллельно с загрузкой страницы, но выполнение скрипта произойдет только после полного разбора HTML-документа
*/

// УРОК 2

/*Вопрос 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, поскольку при использовании инкремента ++ до переменной ее значение увеличивается на 1
d = b++; alert(d);           // 1, поскольку при использовании инкремента ++ после переменной сначала осущестляется ее вывод, а уже после - увеличение на 1
c = (2 + ++a); alert(c);      // 5, т.к. в строке 3 переменная а увеличилась до 2, в этой строке инкремент добавил еще 1 и плюс 2 в скобках
d = (2 + b++); alert(d);      // 4, т.к. в строке 5 значение b вывело 1, но после этого увеличилось на 1 и составило 2, инкремент в этой строке работает так же и выведет прежнее значение 2 плюс 2 в скобках (а уже после этого значение b увеличится на 1)
alert(a);                    // 3, т.к. по итогам строки 6 знаение переменной а составило 3
alert(b);                    // 3, т.к. по итогам строки 7 (после вывода значения) значение переменной b составило 3

// Вопрос 2

var a = 2;
var x = 1 + (a *= 2); // оператор a*=2 - это краткая запись выражения a=a*2 = 2*2, соответственно, x=1+4=5
alert(x);

// Вопрос 3

let a = +prompt('Введите первое целое число:');
let b = +prompt('Введите второе целое число:');
if (a >= 0 && b >= 0) {
    if (a >= b) {
        alert('a-b= ' + (a - b));
    }
    else alert('b-a= ' + (b - a));
}
else if (a < 0 && b < 0) {
    alert('a*b= ' + (a * b));
}
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    alert('a+b= ' + (a + b));
}
else alert('Что-то пошло не так');

// Вопрос 4

let a = 4;
switch (a) {
    case 1: console.log(a++);
    case 2: console.log(a++);
    case 3: console.log(a++);
    case 4: console.log(a++);
    case 5: console.log(a++);
    case 6: console.log(a++);
    case 7: console.log(a++);
    case 8: console.log(a++);
    case 9: console.log(a++);
    case 10: console.log(a++);
    case 11: console.log(a++);
    case 12: console.log(a++);
    case 13: console.log(a++);
    case 14: console.log(a++);
    case 15: console.log(a++);
}

// Вопрос 5

function plus(a, b) {
    return (a + b);
}
function minus(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}

// Вопрос 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'plus': return plus(arg1, arg2);
            break;
        case 'minus': return minus(arg1, arg2);
            break;
        case 'multiply': return multiply(arg1, arg2);
            break;
        case 'divide': return divide(arg1, arg2);
            break;
    }
}

console.log(mathOperation(10, 5, 'plus'));
console.log(mathOperation(10, 5, 'minus'));
console.log(mathOperation(10, 5, 'multiply'));
console.log(mathOperation(10, 5, 'divide'));


// Вопрос 7

console.log(typeof (0)); // number, т.е. 0 - это существующее число
console.log(typeof (null)); // object, т.е. null - это объект, обозначающий отсутствие значения (т.е. переменная есть, она определена, но пуста)
console.log(0 > null); // false, т.к. при сравнении 0 остается Number, а null приводится к Number и число ноль не больше числа ноль
console.log(0 >= null); // true, т.к. при приведении null к Number при проверке >= ноль и ноль будут равны
console.log(0 == null); // false, т.к.при нестрогом равенстве Null определяется как равное Undefined и они не равны никаким другим значениям, в т.ч. и нулю
console.log(0 === null); // false, т.к. типы объектов разные


// Вопрос 8

function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    else if (pow < 0) {
        return (power(1 / val, -pow));
    }
    else return (val * power(val, pow - 1));
}
console.log(power(3, -2));
*/