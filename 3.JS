let numbers = [];

function addNumber(number) {
    numbers.push(number);
    console.log(`Число ${number} добавлено в массив.`);
}

function analyzeNumbers() {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive++;
        }
        else if (numbers[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }

    console.log("Положительных чисел: " + positive);
    console.log("Отрицательных чисел: " + negative);
    console.log("Нулей: " + zero);
}

addNumber(10);
addNumber(-5);
addNumber(0);
addNumber(20);
addNumber(-8);
addNumber(0);

analyzeNumbers();