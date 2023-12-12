const BOOK_SERVICE_BASE_URL = "http://localhost:9191/";

const BOOK_API_BASE_URL = "api/books/";
const CATEGORY_API_BASE_URL = "api/categories/";

const GET_CATEGORY = "get-category/";
const GET_BOOK = "get-book/";
const GET_ALL_BOOKS = "get-all-books";
const GET_ALL_CATEGORIES = "get-all-categories"
const ADD_BOOK = "add-book";
const ADD_CATEGORY = "add-category";

class BookService {

    getBook() {
        return BOOK_SERVICE_BASE_URL + BOOK_API_BASE_URL + GET_BOOK + "2";
    }

    getCategory() {
        return BOOK_SERVICE_BASE_URL + CATEGORY_API_BASE_URL + GET_CATEGORY + "1";
    }

    getAllBooks() {
        return BOOK_SERVICE_BASE_URL + BOOK_API_BASE_URL + GET_ALL_BOOKS;
    }

    getAllCategories() {
        return BOOK_SERVICE_BASE_URL + CATEGORY_API_BASE_URL + GET_ALL_CATEGORIES
    }

    addBook() {
        return BOOK_SERVICE_BASE_URL + BOOK_API_BASE_URL + ADD_BOOK;
    }

    addCategory() {
        return BOOK_SERVICE_BASE_URL + CATEGORY_API_BASE_URL + ADD_CATEGORY;
    }

}

export default new BookService();