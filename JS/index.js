//alert ("Helo, Word!");
/*
console.log("Hello, Stas!!");
console.log("Hello","JS Developer","!!!!");
*/
/*
//переменные style camelCase

//объявление переменных
let x;
let y;
let userName;
let userColorAvatarBG;
let a,b,c;

//инициализация переменных
x = 5;
y = -100;
a = 3.14;
b = 0.00005;
userName = "Stas";
userColorAvatarBG = "red";

console.log(x);
console.log(y,a,b);
console.log("User name is",userName);
console.log('A = ',a, 'and B = ',b);

//объявление с иницмализацией
let d = 200;
let name1 = "Tom Fox";
console.log(name1);

//Что мы можем положить в (контейнер) переменную, тип
let x2;
x2 = 100;
console.log(x2);
x2 = -3;
console.log(x2);
x2 = "hello";
console.log(x2);
x2 = 'Stas';
console.log(x2);
x2 = true; //логитесчкий тип бывает true и false 
console.log(x2);

//можем ложить контейнеры один в один
console.log('x=',x);
console.log('y=',y);
x = y;
console.log('x=',x);
console.log('y=',y);

// операции
x = 10;
console.log('x=',x);
x = x+5;
console.log('x=',x);
x = x-5;
console.log('x=',x);
x = x*5;
console.log('x=',x);
x = x/5;

y = 2;
x = 10;

console.log('x=',x);
x = x+y;
console.log('x=',x);
x = x-y;
console.log('x=',x);
x = x*y;
console.log('x=',x);
x = x/y;

let a1 = 10;
let a2 = 0, a3 = 'Stas';
let a4 = false, a5 = -2;

let result;
result = a1+a5;
console.log ('result=',result);
result = a1*a5;
console.log ('result=',result);
result = a1-a5;
console.log ('result=',result);
result = result*2;
console.log (result);

result = 500 - result;
console.log (result);
*/

//константа (постоянная) - большие буквы с нижним подчеркиванием
/*
const COLOR_RED = "#FF0000";
const COLOR_GREEN = "#00FF00";
const COLOR_BLUE = "#0000FF";
const MAX_QUERIES = 3;

let x = 100;
x = x + MAX_QUERIES;
console.log(x);
*/


//операции (+ - * /) - краткие записи
/*
let a1 = 200, a2 = 100, result;
a1 +=5; //a1 = a1 +5;
a1 -+5; //a1 = a1 -5;
a1 *=5; //a1 = a1 *5;
a1 /=5; //a1 = a1 /5;

a2 +=a1 //a2 = a2 + a1;
a2 -=a1 //a2 = a2 - a1;
a2 *=a1 //a2 = a2 * a1;
a2 /=a1 //a2 = a2 / a1;
*/

// операция инкремент / декремент 
/*
x = 10;
x++ //x = x+1; или ++x
x-- //x = x-1; или --x
*/

// возведение в степень
/*
result = 5 ** 2;
console.log (result);
result = 5 ** 3;
console.log (result);
result = 5 ** (1/2);
console.log (result);
*/

/*
/1 Создайте переменные a=10 и b=20. Отнимите от a переменную b и  
результат присвойте переменной c. Затем создайте переменную d,  
присвойте ей значение c. Сложите переменные c и d,  
а результат запишите в переменную result. 
 
2 Переделайте этот код так, чтобы в нем использовались операции  
+=, -=, *=, /=, ++, - - 
let num = 100; 
num = num + 7; 
num = num - 18; 
num = num * 10; 
num = num / 15; 
num = num + 1; 
num = num - 1; 
 
3 Спросите у пользователя число. Возведите это число в квадрат.
let r = prompt('Введи число');

let a = 10, b = 20; c, d, result;
c = a - b;
d = c;
result = c + d;
console.log (result);

let num = 100; 
num += 7;
num -= 18; 
num *= 10; 
num /= 15; 
num += 1; //num++
num -= 1; //num--
console.log (num);

let r = prompt('20');    // - РАЗОБРАТЬ!!!!
result = r ** 2;
console.log (result);
*/

/*
//4 Задание вычислите площадь прямоугольника по введеным данным
// S = a * b;
let a = 5, b = 7, S;
S=a*b;
console.log ('Square is',S,'m');

//5 Задание: перевести мм в см (спросить мм в ответ дать см)
let uderValueMM, userVAluemCM;
uderValueMM=1000;
userVAluemCM = uderValueMM/10;
console.log ('uderValueMM',"mm=",userVAluemCM,"cm");
*/

//Условные операторы
// >   <   >=   <=   !=   ===включая проверку типа
/*
let a,b;
a = 5;
b = 7;

console.log (a>b);
console.log (a<b);
console.log (a==b);
console.log (a!=b);
console.log (a===b);
*/

//Условные оператор if
/*
if(условие){
    //набор действий если условия выполняет
}
*/
/*
let userAge = prompt ('Введите свой возраст'); - prompt - это окно для ввода значения
if (userAge >= 18) {
    alert ('Вы-совершенолетний');
}
*/

/* IF + ELSE
if (условие){
    список действий при выполнении условия
} else {
    список действий при НЕ выполнении условия
}
let userAge = prompt ('Введите свой возраст');
if (userAge >= 18) {
    alert ('Вы-совершенолетний');
}else{
    alert ('Вы-несовершенолетний');
}

//ПРИМЕР
let userNumber = prompt ('Введите свой возраст');
if (userNumber >= 10) {
    alert ('Больше');
}else{
    alert ('Меньше');
}
*/

//проверить число положительное, отризацтельное или ноль
/*
let xCon = prompt ('Enter x');
if (xCon>0) {
    console.log('положительное')
} else if (xCon<0) {
    console.log('отрицательное')
} else {
    console.log('это ноль')
}
*/

//тернарный оператор ?
//let result = условие? значение1 : значение2;
/*
let userAge = 20;
let res = (userAge >=18) ? 'совершенолетний': 'несовершолетний';
console.log(res);
*/


//оператор остаток от деления % - используется для чисел четное или нечетное число
/*
console.log(5 % 2);

let xCon = prompt ('Четное/Нечетное');
if (xCon%2 !=0) {
    alert('нечетное')
} else {
    alert('четное')
}

let res = (xCon%2 ==0) ? 'четное' : 'нечетное';
console.log(rel);
*/


// нечколько условий
// && and - и || or - или
/*
// пример. поступаемое число положительное и больше 10
if (value>0 && value>10){}
// пример. поступаемое число положительное и равно 0
if (value>0 || value==0){}

if (weekDay == 'Sunday' && isWorkink == true {console.log ('yes');}
*/

//циклы for, while
/*
for (начальное условие; шаг; конечное условие){
    действие
}
*/

// Задача. посчитать сумму чисел от 1 до 10
/*
let start = 1, end = 10, result = 0;
for (start = 1; start <= end; start = start+1) {
    result = result + start;
}
console.log(result);
*/

//посчитать сумму чисел от 10 до 1
/*
let i;
for (i=10; i>=1; i--){
    console.log(i)
}
*/





//2 УРОК ------ ФУНКЦИИ И ЦИКЛЫ






// let x - это контейнер, const
/*
if(условие){
    действие если условие выполняется
} else if (условие 2){
    действие если условие2 выполняется
} else{
    все другие варианты
}
*/

// если четное то умножить на 2, нечетное  - поделить на 2 (if==, > <,>= <=, && и, || или)
/*
let value = 100;
if(value%2 == 0){
    value = value * 2; // value *= 2;
} else {
    value /= 2;
}
*/

// если четное и больше 100 то умножить на 2, нечетное  - поделить на 2 
/*
if(value%2 == 0 && value >=100){
    value = value * 2; // value *= 2;
} else {
    value /= 2;
}
*/

//если число меньше 10 вычесть 1 из него, если от 10 до 100 вычесть 5 если больше 100 поделить на 2
/*
if (value < 10){
    value = value - 1;
} else if  (value>=10 && value <100){ // - такие вещи избигаем т.к. очень длинный код
    value = value - 5;
} else if (value >=100){
    value = value / 2;
} else {
    console.log('Error');
}

// -м.....9.9
// 10.....99.9
// 100.....M

if (value < 10){
    value = value - 1;
} else if (value >=100){
    value = value / 2;
} else {
    value = value - 5;
}
*/

// цикл for
/*
for (начальное условие; конечное условие; шаг){
    действие
}
*/
/*
let num = 1;
for(num=1; num<=100; num=num+1){
    result1=result1+num;
}
*/

// найти произведения чисел от 2 до 8
/*
result = 1;
for(num=2; num<=8; num++){
    result = result * num;
}
console.log(result);
*/

/*
// найти сумму нечетных чисел от 10 до 50
result = 0;

//1 - вариант
for (num=10; num<=50; num++){
    if(num%2 == 1){
        result = result + num;
    }
}

//2 - вариант

for (num=11; num<=50; num +1){
        result = result + num;
    }
*/

/*
// цикл while
 while (конечное условие){
     действие
 }
 */

 // сумма чисел от 1 до 10
 // - для for
/*
let n, res=0
 for(n=1; n<=10; n++){
     res = res + n;
 }
 console.log ('FOR',res);
 */

// - для while
/*
n=1, res = 0;
 while(n<=10){
    res = res + n;
    n++;
 }
 */

 // вывести числа от 5 до 0
/*
n=5;
while(n>=0){
    console.log(n);
    n = n-1;
}
*/

 // вывести числа от 5 до 0 выводить квадраты (25,16,9,4,1,0)
 /*
 n=5;
while(n>=0){
    n ^=2; // n = n*n
    console.log(n);
    n = n-1; // n--
}
*/


// Цикл do...while
 // вывести числа от 5 до 0
 /*
 n=5;
 do {
    console.log(n);
    n = n-1;    
 } while(n>=0);
 */

// Задача. Циклом . Выйти когда сумма чисел превысит 100. дополнительно посмотреть на каком числе остановились

/*
let n = 1, sum = 0;
while(true) {
    sum +=n
    if (sum > 100) break;
    n++;
}
console.log(n);
console.log(sum);



sum=0;
for(n=1; ;n++){
    sum +=n;
    if (sum>100) break;
}
console.log(n);
console.log(sum);


/*
//бесконечные цыклы
//while (true){}
//for( ; ; ){}
//while(false){}
*/

/*
let x1=1, x2=2, x3=3;
console.log('Result:',x1,x2,x3);
console.log('Result: x1,x2,x3 ');
console.log(`Result: ${x1} ${x2} ${x3}`);
*/

/*
let userValue = promt('Веди номер месяца');
let result;
if(userValue ==1){
    result = "Январь";
}else if(userValue ==2){
    result = "Январь";
}else if(userValue ==3){
    result = "Март";
}else if(userValue ==4){
    result = "Апрель";
}else if(userValue ==5){
    result = "Май";
}else{
    result='нет такого месяца';
}


switch(userValue){
    case 1: result = "Январь";break;
    case 2: result = "Фувраль";break;
    //...
    default: result='нет такого месяца'; break;
}
*/
/*
//задачки

//1 - попросить пользователя ответить сколько будет 2+2. сказать прав или нет

let result = 4;
let answer = prompt('2+2=?')
if(answer==result){
    alert('Bingo!')
}else{
    alert('Sorry,Wrong')
}

//2 - попросить пользователя ответить сколько будет 2+2. сказать прав или нет, спрашивать пока он не решит правильно

//1 - способ
while(true){
    answer = prompt('2+2=?')
    if(answer==result){
        alert('Bingo!');
        break;
    }
    alert('Sorry,Wrong')
}

//2 - способ

do{
    answer = prompt('2+2=?');
}while(answer == result);


//3 - посчитать сумму нечетных чисел от 1 до 20 используя for / while

let number = 1, limit = 20, res = 0;

for(number=1; number<= limit; number=number+2){
    res=res+number;
}

number = 1, res =0;
while(number <= limit){
    res = res + number;
    number = number + 2;
}


//let x = promt('Ведите число')
// alert('Some msg')
*/

//функция имя (параметры которые необхидымы для работы)
/*
function add(value1, value2){ //функция имя (параметры)
    let result = value1+value2; // делаем действие
    return result; //выводим результат
}
*/

// Функция калькулятор
/*
function add(a,b){
    let result = a+b;
    return result;
}
function sub(a,b){
    let result = a-b;
    return result;
}
function mult(a,b){
    let result = a*b;
    return result;
}
function division(a,b){
    let result = a/b;
    return result;
}
function print(value){
    console.log(value);
}

let val1,val2;
val1=Number(prompt('Enter value1'));
val2=Number(prompt('Enter value2'));
console.log('+',add(val1,val2));
console.log('-',sub(val1,val2));
console.log('*',mult(val1,val2));
console.log('/',division(val1,val2));
*/

// задача вывести сообщение столько раз сколько задает пользователь
/*
function repeatMsg (msg, n){
    while(n>0){
        console.log(msg);
        n--;
    }
}
repeatMsg('Hello, World', 5);
*/


//задача
/*
*****
****
***
**
*
*/
/*
function printSymbols(symbolStr, countMax){
    let i, str="";
    for(i=1; i<=countMax; i++){
        str = str + symbolStr;
    }
    return str;
}

let result;
result = printSymbols ("*", 5);
console.log(result);
result = printSymbols ("%", 10);
console.log(result);
result = printSymbols ("$", 5);
console.log(result);
*/

/*
//задача - вывести все числа кратные 5 в указанном диапозоне пользователем
function task1(minLimit, maxLimit){
    let num;
    for(num = minLimit; num <= maxLimit; num ++){
        if(num %5 == 0){
            console.log (num)
        }

    }
}
*/

/*
//задача - сделать функцию которая проверяет сумму двух указанных чисел
//1
function task2(number1, number2, answer){
    if(number1+number2 == answer){
        return true;
    }
    return false;
}

let answer = prompt ('2+2=?');
let res;
res = task2(2,2, answer);
if(res == true){
    console.log('yes');
}else{
    console.log('no');
}

//2
function task2_2(number1, number2, answer){
    if(number1+number2 == answer){
        console.log('yes');
    }
    console.log('no');
}

answer = prompt ('2+2=?');
task2(2,2, answer);
if(res == true){
    console.log('yes');
}else{
    console.log('no');
}
*/



/*1
let name1 = 11;
let name2 = "true";
let name3 = "java script";
let name4 = 100;
console.log(name1,name2,name3,name4);
*/


/*2
let a1 = 'Hello', a2 = 'userName'
let r = prompt('Как Вас зовут?');
    if(r = a2) {
    alert ('Hello, Vasya!');
}
*/

/*
let min = 15;
let r = prompt('Введите количество минут');

if (r >= 0 && r <= 15) {
	alert('В первую четверть.');
}
else if (r >= 15 && r <= 30) {
	alert('Во вторую четверть.');
}
else if (r >= 30 && r <= 45) {
	alert('В третью четверть.');
}
else if (r >= 45 && r <= 60) {
	alert('В четвертую четверть.');
}
*/

/*4
let num;
for(num = 10; num <= 50; num ++){
    if(num %5 == 0){
        console.log (num)
    }
}
*/



let mult = 1;
for(let i=5; i<=12; i++){
    mult *= i;
}console.log(mult)


