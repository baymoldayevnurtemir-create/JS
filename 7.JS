let flights = [];

function addFlight(flightNumber, destination, departureTime, capacity) {
    let flight = {
        flightNumber: flightNumber,
        destination: destination,
        departureTime: departureTime,
        capacity: capacity,
        passengers: []
    };

    flights.push(flight);

    console.log("Рейс " + flightNumber + " добавлен.");
}

function cancelFlight(flightNumber) {
    let index = flights.findIndex(function(flight) {
        return flight.flightNumber === flightNumber;
    });

    if (index === -1) {
        console.log("Рейс не найден");
        return;
    }

    flights.splice(index, 1);

    console.log("Рейс " + flightNumber + " отменен.");
}

function registerPassenger(flightNumber, passengerName) {
    let flight = flights.find(function(flight) {
        return flight.flightNumber === flightNumber;
    });

    if (!flight) {
        console.log("Рейс не найден");
        return;
    }

    if (flight.passengers.length >= flight.capacity) {
        console.log("Нет свободных мест");
        return;
    }

    flight.passengers.push(passengerName);

    console.log("Пассажир " + passengerName + " зарегистрирован.");
}

function findFlightByNumber(flightNumber) {
    let flight = flights.find(function(flight) {
        return flight.flightNumber === flightNumber;
    });

    if (!flight) {
        console.log("Рейс не найден");
        return;
    }

    console.log("Номер рейса: " + flight.flightNumber);
    console.log("Направление: " + flight.destination);
    console.log("Время вылета: " + flight.departureTime);
    console.log("Вместимость: " + flight.capacity);
    console.log("Количество пассажиров: " + flight.passengers.length);
}

function showAllFlights() {
    if (flights.length === 0) {
        console.log("Рейсов нет");
        return;
    }

    for (let i = 0; i < flights.length; i++) {
        console.log("Номер рейса: " + flights[i].flightNumber);
        console.log("Направление: " + flights[i].destination);
        console.log("Время вылета: " + flights[i].departureTime);
        console.log("Вместимость: " + flights[i].capacity);
        console.log("--------------------");
    }
}

function showFlightPassengers(flightNumber) {
    let flight = flights.find(function(flight) {
        return flight.flightNumber === flightNumber;
    });

    if (!flight) {
        console.log("Рейс не найден");
        return;
    }

    console.log("Пассажиры рейса " + flightNumber + ":");

    if (flight.passengers.length === 0) {
        console.log("Пассажиров пока нет");
        return;
    }

    for (let i = 0; i < flight.passengers.length; i++) {
        console.log(flight.passengers[i]);
    }
}

addFlight(101, "Almaty - Astana", "10:30", 3);
addFlight(102, "Almaty - Istanbul", "15:00", 2);
addFlight(103, "Astana - Shymkent", "18:45", 4);

registerPassenger(101, "Alex");
registerPassenger(101, "John");
registerPassenger(102, "Michael");

findFlightByNumber(101);

showAllFlights();

showFlightPassengers(101);

cancelFlight(103);

showAllFlights();