import axios from 'axios';

const USER_SERVICE_BASE_URL = "http://localhost:9191/";

const USER_API_BASE_URL = "api/users/";

const GET_USER = "get-user/";

class UserService {

    getUser() {
        return axios.get(USER_SERVICE_BASE_URL + USER_API_BASE_URL + GET_USER + "afulvio@booklify.it");
    }

}

export default new UserService();