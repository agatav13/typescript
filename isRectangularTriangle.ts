// Chcę, aby w tym pliku znalazła się funkcja, która przyjmie jako argumenty liczby,
// oznaczające długość boku trójkąta, a zwróci informację czy dany trójkąt będzie prostokątny.

function isRectangularTriangle(num1: number, num2: number, num3: number) {
    return num1 ** 2 + num2 ** 2 === num3 ** 2 || num1 ** 2 + num3 ** 2 === num2 ** 2 || num2 ** 2 + num3 ** 2 === num1 ** 2;
}

console.log(isRectangularTriangle(3, 4, 5));
