"use strict";
// W JS są metody które działają na Array'ach, wszystkie z nich można zaimplementować za pomocą jednej,
// najtrudniejszej ale również dającej najwięcej możliwości REDUCE. Za jej pomocą zaimplementuj:
// 1. map
// 2. filter
// 3. every
// 4. some
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
// metoda map, tworzy nowy array
const arr = data_1.pollutants.map((item) => {
    return item.longLabel;
});
function reduceAsMap(arr) {
    return data_1.pollutants.reduce((acc, curr) => {
        console.log(acc);
        acc.push(curr.longLabel);
        console.log(acc, 2);
        return acc;
    }, []);
}
const filtered = data_1.pollutants.filter((i) => {
    return i.value.length === 2;
});
