function calculator(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Неверный тип данных");
    }

    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        if (b === 0) {
            return "Ошибка деления на ноль";
        }
        return a / b;
    }
    else {
        return "Ошибка: неизвестный оператор";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));
console.log(calculator(10, 0, "/"));
