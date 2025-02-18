const cars = [
    {
        id: 1,
        name: "Gol",
    },
    {
        id: 2,
        name: "Honda Civic",
    },
    {
        id: 3,
        name: "Ferrari",
    },
];

//ACESSAR INDIVIDUALMENTE
console.log(cars[0].name);
console.log(cars[1].name);

//ACESSAR VIA LOOP
console.log("======================");

for (const car of cars) {
    console.log(car.name);
}

//ADICIONAR OUTRO OBJETO DENTRO DO ARRAY
console.log("======================");

cars.push({
    id: 4,
    name: "Corolla",
});

for (const car of cars) {
    console.log(car.name);
}