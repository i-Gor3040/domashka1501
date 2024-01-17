/* 1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) */

let numHamburger = 4;
let potato = 2;
let visitors = 4;

if (numHamburger >= 4 && potato) {
  console.log("Ми поїли");
} else {
  console.log("Ми йдемо в інше кафе");
}

/* 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль. */

let price = 900;
if (price >= 1000 && price <= 1900) {
  console.log("true");
} else {
  console.log("false");
}

/* 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль. */

let price2 = 1901;
if (price2 < 1000 || price2 > 1900) {
  console.log("true");
} else {
  console.log("false");
}

let price3 = 1900;
if (!(price3 >= 1000 && price3 <= 1900)) {
  console.log("true");
} else {
  console.log("false");
}

/* За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль. */

let season = 0;
if (season == 1) {
  console.log("Winter");
} else if (season == 2) {
  console.log("Spring");
} else if (season == 3) {
  console.log("Summer");
} else if (season == 4) {
  console.log("Fall");
} else {
  console.log("Provide correct value");
}

/* 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. */

let a = 6;
let b = 30;
let c = 98;

if (a > b) {
  if (c > a) {
    console.log(a);
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
} else {
  if (a > c) {
    console.log(a);
  } else if (b > c) {
    console.log(c);
  } else {
    console.log(b);
  }
}

/* 6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

let dayNumber;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Provide correct value");
    break;
}

/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */

let num1 = 50;
let num2 = 0;
let arihmeticOperator = "%";

switch (arihmeticOperator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 != 0) {
      console.log(num1 / num2);
    } else console.log("Division by zero is not allowed");
    break;
  default:
    console.log("Provide correct arithmetic operator");
    break;
}

/* 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray. */
let myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

/* 9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for. */
let myArr1 = [];
for (let i = 1; i < 10; i++) {
  if (!(i % 2)) {
    myArr1.push(i);
  }
}

let myArr2 = [];
for (let i = 1; i < 10; i++) {
  if (i % 2) {
    myArr2.push(i);
  }
}

/* 10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6]; */

let total = 0;
const myArr = [2, 3, 4, 5, 6];
for (let i = 0; i < myArr.length; i++) {
    total +=myArr[i]
}

/* 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6 */

const arr3 = [ [1, 2], [3, 4], [5, 6] ];
for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        console.log(arr3[i][j]);
    }
}

/* 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product); */

    const arr7 = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    for (let i = 0; i < arr7.length; i++) {
        for (let j = 0; j < arr7[i].length; j++) {
           product *= (arr7[i][j]);
        }
    }

    console.log(product); 

/* 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

let str = "JavaScript is awesome!";
console.log(str.replace(/[aeio]/gi, ""));

/* 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/ 
