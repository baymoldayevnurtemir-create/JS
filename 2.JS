function getSeason(month, temperature) {
    if (typeof month !== "number" || typeof temperature !== "number") {
        throw new Error("Неверный Тип данных");
    }

    if (month < 1 || month > 12) {
        return "Ошибка -  месяца нету";
    }

    if ((month === 12 || month === 1 || month === 2) && temperature <= 5) {
        return "Зима";
    }
    else if (month >= 3 && month <= 5 && temperature < 20) {
        return "Весна";
    }
    else if (month >= 6 && month <= 8 && temperature > 20) {
        return "Лето";
    }
    else if (month >= 9 && month <= 11 && temperature >= 5 && temperature <= 20) {
        return "Осень";
    }
    else {
        return "Несоответствие сезона";
    }
}

console.log(getSeason(1, 3));
console.log(getSeason(4, 15));
console.log(getSeason(7, 25));
console.log(getSeason(10, 15));
console.log(getSeason(15, 10)); 
