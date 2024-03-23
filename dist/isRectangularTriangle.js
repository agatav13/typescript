"use strict";
// Chcę, aby w tym pliku znalazła się funkcja, która przyjmie jako argumenty liczby,
// oznaczające długość boku trójkąta, a zwróci informację czy dany trójkąt będzie prostokątny.
function isRectangularTriangle(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        return num1 ** 2 + num2 ** 2 === num3 ** 2 || num1 ** 2 + num3 ** 2 === num2 ** 2 || num2 ** 2 + num3 ** 2 === num1 ** 2;
    }
    else {
        return "At least one of the numbers is negative or equal to zero.";
    }
}
// test
console.log(isRectangularTriangle(3, 4, 5));
console.log(isRectangularTriangle(-3, 4, 5));
