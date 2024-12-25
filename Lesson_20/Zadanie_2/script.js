const books = [
    { title: "Побег из Шоушенка", author: "Стивен Кинг" },
    { title: "Аэропорт", author: "Артур Хейли" },
    { title: "Мальчик в полосатой пижаме", author: "Джон Бойн" }
];

console.log("Информация о книгах:");
books.forEach(book => {
    console.log(`Название: "${book.title}", Автор: ${book.author}`);
});
