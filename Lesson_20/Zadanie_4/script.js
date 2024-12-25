const fruits = [
    { name: "Яблоко", color: "красный" },
    { name: "Гранат", color: "красный" },
    { name: "Киви", color: "зеленый" },
    { name: "Банан", color: "желтый" },
    { name: "Мандарин", color: "оранжевый" }
];

const redFruits = fruits.filter(fruit => fruit.color === "красный");

console.log("Фрукты с цветом 'красный':");
redFruits.forEach(fruit => {
    console.log(fruit.name);
});