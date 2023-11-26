import axios from 'axios';

const BOOK_SERVICE_BASE_URL = "http://localhost:9191/";

const BOOK_API_BASE_URL = "api/books/";

const CATEGORY_API_BASE_URL = "api/categories/";

const GET_CATEGORY = "get-category/";

const GET_BOOK = "get-book/";

class BookService {

    getBook() {
        return axios.get(BOOK_SERVICE_BASE_URL + BOOK_API_BASE_URL + GET_BOOK + "2");
    }

    getCategory() {
        return axios.get(BOOK_SERVICE_BASE_URL + CATEGORY_API_BASE_URL + GET_CATEGORY + "1");
    }

}

export default new BookService();