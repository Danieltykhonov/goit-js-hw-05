'use strict';

// Виконуй це завдання у файлі task-4.js


// Оголоси стрілочну функцію getTotalBalanceByGender, яка очікує два параметри:

// users — масив об'єктів користувачів
// gender — рядок, що зберігає стать


// Функція використовує ланцюжок виклику методів і повертає загальний баланс користувачів (властивість balance), 
// стать яких (властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((total, balance) => total + balance, 0);


// Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053
console.log(getTotalBalanceByGender(clients, "female")); // 8863

// Залиш цей код для перевірки ментором.



// Вимоги

// Оголошено змінну getTotalBalanceByGender.
// Змінній getTotalBalanceByGender присвоєно стрілочну функцію з параметрами (users, gender).
// У тілі функції використано ланцюжок методів у правильному порядку.
// Значення параметра users не змінюється.
// Якщо значення параметра gender — рядок "male", функція повертає число 12053.
// Якщо значення параметра gender — рядок "female", функція повертає число 8863.
// Виклик з будь-якими валідними аргументами повертає правильне значення.
// Результати всіх викликів виведено в консоль.