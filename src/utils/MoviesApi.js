import config from "../config.js"

class MoviesApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    getAllMovies() {
        return fetch(this._baseUrl,  {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => this._getResponseData(res));
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

const moviesApi = new MoviesApi({
    baseUrl: config.moviesUrl,
});

export default moviesApi;
