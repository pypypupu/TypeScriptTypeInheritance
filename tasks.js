var updateCarInfo = {
    model: "BMW",
    brand: "e36"
};
var books = [];
function bookLogFactory(toLog, fn) {
    var copy = toLog;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        fn.apply(void 0, args);
        console.log("Book array");
        console.log(JSON.stringify(copy, null, 2));
    };
}
function addBook() {
    var booksToAdd = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        booksToAdd[_i] = arguments[_i];
    }
    books.push.apply(books, booksToAdd);
}
var addWithLog = bookLogFactory(books, addBook);
var bookStranger = {
    author: "Albert Camus",
    title: "Stranger",
    publishDate: new Date(),
    originalLanguage: "French",
    genres: ["Absurd fiction", "Crime fiction"]
};
var bookNineteenEightyFour = {
    author: "George Orwell",
    title: "Nineteen Eighty-Four",
    publishDate: new Date(),
    originalLanguage: "English",
    genres: ["Science Fiction", "Dystopian Fiction"]
};
addWithLog(bookStranger, bookNineteenEightyFour);
