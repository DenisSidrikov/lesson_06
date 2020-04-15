"use strict";

function funcMath() {
    let a = Math.floor(Math.random() * 100);
    return function newNumber(b) {
        while (isNaN(b) || b.trim() === '' || b === null) {
            b = +newNumber(prompt("Введи число!"));
        }
        if (b > a) {
            b = +newNumber(prompt("Загаданное число меньше"));
        } else if (b < a) {
            b = +newNumber(prompt("Загаданное число больше"));
        } else {
            alert("Ты угадал! Игра окончена!");
        }
    };
}
const mathPow = funcMath();
let y;
let start = function () {
    y = prompt("Угадай число от 1 до 100");
    while (isNaN(y) || y.trim() === '' || y === null) {
        y = prompt("Введи число!");
    }
    return y;
};
start();
mathPow(y);