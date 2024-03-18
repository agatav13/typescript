// Chcę aby w tym pliku znalazła się funkcja, która zwróci mi obiekt "człowieka",
// któremu macie wymyślić jakieś properties do których będziecie w jakiś sposób generować wartości.


function range(size: number, start = 0) {
    return [...Array(size).keys()].map(i => i + start);
}

function random(possibleValue: Array<any>) {
    return possibleValue[Math.floor(Math.random() * possibleValue.length)]
}

const possibleSex = ["female", "male"];
const possibleAge = range(100, 1);
const possibleHeight = range(51, 150);

interface Human {
    sex: "female" | "male";
    age: number;
    height: number;
}

function randomPerson() : Human {
    return {
        sex: random(possibleSex),
        age: random(possibleAge),
        height: random(possibleHeight)
    };
}

console.log(randomPerson())
