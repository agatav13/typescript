// W JS są metody które działają na Array'ach, wszystkie z nich można zaimplementować za pomocą jednej,
// najtrudniejszej ale również dającej najwięcej możliwości REDUCE. Za jej pomocą zaimplementuj:
// 1. map
// 2. filter
// 3. every
// 4. some

import {pollutants} from "./data/data";

// metoda map
// tworzy nowy array z elementami po wywołaniu podanej funkcji
// zwraca longLabel z data
const label: string[] = pollutants.map((item) => {
    return item.longLabel;
});

// metoda reduce -> wykonuje podaną funkcję, przekazując wartość zwracaną dla poprzedniego elementu
function reduceAsMap(arr: any[]): string[] {
    return arr.reduce((acc, curr) => {
        //console.log(acc)
        acc.push(curr.longLabel);
        //console.log(acc, 2)
        return acc;
    }, [] as string[])
}
//console.log("test 1", label);
//console.log("test 1", reduceAsMap(pollutants));



// metoda filter
// zwraca wartości które spełniają pewien warunek
// zwraca elementy w których value ma długość dwa
const filtered = pollutants.filter((i): boolean => {
    return i.value.length === 2;
});

// zwraca obiekt z longLabel ozon
const f = pollutants.filter((i): boolean => {
    return i.longLabel === "Ozon";
});

function reduceAsFilter(arr: any[]): object[] {
    return arr.reduce((acc: object[], curr) => {
        if (curr.value.length === 2) {
            acc.push(curr);
        }
        return acc;
    }, [] as object[])
}
//console.log("test 2", filtered);
//console.log("test 2", reduceAsFilter(pollutants));



// metoda every
// sprawdza czy wszystkie elementy spełniają warunek
// output false
const every: boolean = pollutants.every((i): boolean => {
    return i.value.length < 4;
});

// output true
const e: boolean = pollutants.every((i): boolean => {
    return i.longLabel.length < 20;
});

function reduceAsEvery(arr: any[]): boolean {
    return arr.reduce((acc: boolean, curr) => {
        return acc && curr.value.length < 4;
    }, true)
}
//console.log("test 3", every);
//console.log("test 3", reduceAsEvery(pollutants));



// metoda some
// sprawdźa czy przynajmniej jeden element spełnia warunek
// output true
const som: boolean = pollutants.some((i): boolean => {
    return i.value.length > 3;
});

// output false
const s: boolean = pollutants.some((i): boolean => {
    return i.longLabel === "hejkanaklejka";
});

function reduceAsSome(arr: any[]): boolean {
    return arr.reduce((acc: boolean, curr) => {
        return acc || curr.value.length > 3;
    }, true)
}
//console.log("test 4", som);
//console.log("test 4", reduceAsSome(pollutants));
