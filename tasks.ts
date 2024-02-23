type Book = {
    id: number;
    author: string;
    title: string;
    publishDate: Date;
    originalLanguage:string;
    genres:string[];
}

type BookCreationType = Omit<Book, "id">

// Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author.

type BookUpdate = Omit<Book, "author" | "title">

type BookId = {
    id: string;
}

type Car = {
    id: string
    model: string
    brand: string
    mileage: number
    owners: string[]
}

type CarUpdateType = Partial<Car>

const updateCarInfo: CarUpdateType = {
    model: "BMW",
    brand: "e36"
}
const books: BookCreationType[] = [];
function bookLogFactory(toLog: any[], fn: (...args: any) => void) {
    const copy = toLog;
    return (...args: any) => {
        fn(...args);
        console.log("Book array")
        console.log(JSON.stringify(copy, null, 2))
    }
}
function addBook(...booksToAdd: BookCreationType[]) {
    books.push(...booksToAdd);
}

const addWithLog = bookLogFactory(books, addBook)
const bookStranger:BookCreationType = {
    author: "Albert Camus",
    title: "Stranger",
    publishDate: new Date(),
    originalLanguage: "French",
    genres: ["Absurd fiction", "Crime fiction"]
} 
const bookNineteenEightyFour:BookCreationType = {
    author: "George Orwell",
    title: "Nineteen Eighty-Four",
    publishDate: new Date(),
    originalLanguage: "English",
    genres: ["Science Fiction", "Dystopian Fiction"]
}
addWithLog(bookStranger, bookNineteenEightyFour);