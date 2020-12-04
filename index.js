// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
function updateResult() {
    const h1 = document.getElementById('result');
    const input = document.getElementById('input1');

    const name = input.value;

    const hi = 'Привет ';


    h1.innerText = hi + name;
}

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

function updateResult2() {
    const h1 = document.getElementById('result2');
    const input = document.getElementById('input2');

    const old = +input.value;

    const year = 2020 - old;


    if (old < 1900 || old >= 2020) {
        h1.innerText = 'Вы врёте';
    } else {
        h1.innerText = 'Вам ' + year + ' лет';
    }
}

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

function updateResult3() {
    const h1 = document.getElementById('result3');
    const input = document.getElementById('input3');

    const side = +input.value;

    const p = side * 4;

    h1.innerText = 'Периметр квадрата ' + p;




}

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

function updateResult4() {
    const h1 = document.getElementById('result4');
    const input = document.getElementById('input4');

    const r = +input.value;

    const s = 2 * r * 3.1415;

    h1.innerText = 'Площадь окружности ' + s;

}

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайтескорость, с которой необходимо двигаться, чтобы успеть вовремя.

function updateResult5() {
    const h1 = document.getElementById('result5');
    const input = document.getElementById('input51');
    const input1 = document.getElementById('input52');

    const s = +input.value;
    const t = +input1.value;


    const v = s / t;

    if (isNaN(s) && isNaN(t)) {
        h1.innerText = 'Ошибка, не числовое значение';
    } else {
        h1.innerText = 'Скорость движения ' + v + ' км/час';

    }

}

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

function updateResult6() {
    const h1 = document.getElementById('result6');
    const input = document.getElementById('input6');

    const dollar = +input.value;

    const euro = dollar * 0.84;

    h1.innerText = 'Ваша сумма' + euro + ' евро';

}

// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

function updateResult7() {
    const h1 = document.getElementById('result7');
    const input = document.getElementById('input7');

    const a = +input.value;
    const c = 820;
    const d = a * 1024;
    const e = Math.floor(d / c);

    if (!isNaN(a)) {
        h1.innerText = 'На вашу флешку вместится ' + e + ' файла';
    } else {
        h1.innerText = 'Ошибка, не числовое значение';
    }



}

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

function updateResult8() {
    const h1 = document.getElementById('result8');
    const input = document.getElementById('input81');
    const input1 = document.getElementById('input82');

    const a = +input.value;
    const b = +input1.value;

    const shoc = Math.floor(a / b);
    const ost = a % b;

    if (a < b) {
        h1.innerText = 'Мы не можем купить сладкого';
    } else if (a >= b && ost == 0) {
        h1.innerText = 'Мы можем купить ' + shoc + ' шоколадок и у нас ничего не останется';
    } else if (a >= b && ost !== 0) {
        h1.innerText = 'Мы можем купить ' + shoc + ' шоколадок и у нас останется ' + ost + ' денег';
    }

}


// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

function updateResult9() {
    const h1 = document.getElementById('result9');
    const input = document.getElementById('input9');

    const a = +input.value;

    const b = Math.floor(a / 100);
    const c = a % 100;
    const d = Math.floor(c / 10);
    const e = a % 10;

    const f = String(b);
    const h = String(d);
    const j = String(e);

    const k = j + h + f;

    h1.innerText = k;
}

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

function updateResult10() {
    const h1 = document.getElementById('result10');
    const input = document.getElementById('input10');

    const a = +input.value;
    const c = (0.05 / 12) * 2;
    const d = a * c;

    if (!isNaN(a)) {
        h1.innerText = 'Ваши проценты составляют ' + d;
    } else {
        h1.innerText = 'Ошибка, попробуйте снова';
    }

}





























