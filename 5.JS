let numbers = [];

function addNumber(number) {
    numbers.push(number);
    console.log(`Число ${number} занесено в массив.`);
}

function calculateAverage() {
    if (numbers.length === 0) {
        console.log("Массив пустой");
        return;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;

    console.log("Среднее значение: " + average.toFixed(2));
}

addNumber(10);
addNumber(20);
addNumber(30);
addNumber(40);

calculateAverage();