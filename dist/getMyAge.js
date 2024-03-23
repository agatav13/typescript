"use strict";
// Chcę aby w tym pliku znalazła się funkcja, do której będę mógł wprowadzić rok swoich narodzin,
// który może zostać podany w takie sposoby:
// 1. new Date(100000000000),
// 2. "2001",
// 3. 1982.
// zwraca wiek po wpisaniu roku urodzenia jednym z powyższych sposobów
function getMyAge(year) {
    const currentYear = new Date().getFullYear();
    if (typeof year === "number") {
        return currentYear - year;
    }
    else if (typeof year === "string") {
        return currentYear - Number(year);
    }
    else if (typeof year === "object") {
        return currentYear - year.getFullYear();
    }
    else {
        return "Value is not a string, number or Date type.";
    }
}
// test
console.log(getMyAge(1999));
console.log(getMyAge("2000"));
console.log(getMyAge(new Date(999999999999)));
