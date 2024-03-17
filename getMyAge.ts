// Chcę aby w tym pliku znalazła się funkcja, do której będę mógł wprowadzić rok swoich narodzin,
// który może zostać podany w takie sposoby:
// 1. new Date(100000000000),
// 2. "2001",
// 3. 1982.

// npm install prompt-sync
import promptSync from "prompt-sync";
const prompt = promptSync();

function getMyAge(year: any): [Date, string, number] {
    return [new Date(String(year)), String(year), Number(year)];
}

const yourYear = prompt("What year were you born in? ");

console.log(getMyAge(yourYear));
console.log(getMyAge(1999));
console.log(getMyAge("1995"));