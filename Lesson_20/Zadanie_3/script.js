const rectangle = {
    a: 10,
    b: 35
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);

console.log("Прямоугольник:");
console.log(`Длина стороны a: ${rectangle.a}`);
console.log(`Длина стороны b: ${rectangle.b}`);
console.log(`Площадь (s): ${rectangle.s}`);
console.log(`Периметр (p): ${rectangle.p}`);