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
