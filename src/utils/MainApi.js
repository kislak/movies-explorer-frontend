import config from "../config.js"

class MainApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    signUp(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                  "name": name,
                  "email": email,
                  "password": password,
              }),
        }).then(res => this._getResponseData(res));
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                  "email": email,
                  "password": password,
              }),
        }).then(res => this._getResponseData(res));
    }

    signOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => this._getResponseData(res));
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                // "Authorization" : `Bearer ${localStorage.getItem("AuthToken")}`
            }
        }).then(res => this._getResponseData(res));
    }

    patchUser(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                  "name": name,
                  "email": email,
              }),
        }).then(res => this._getResponseData(res));
    }


    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => this._getResponseData(res));
    }

    createMovie(item) {
      const {
        country,
        director,
        duration,
        year,
        description,
        nameRU,
        nameEN,
        trailerLink,
        image
      } = item

      return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                  country,
                  director,
                  duration,
                  year,
                  description,
                  nameRU,
                  nameEN,
                  movieId: item.id,
                  image: `https://api.nomoreparties.co${image.url}`,
                  trailer: trailerLink,
                  thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
              }),
        }).then(res => this._getResponseData(res));
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => this._getResponseData(res));
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        console.log(res)
        return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`)
    }
}

const mainApi = new MainApi({
    baseUrl: config.mainUrl
});

export default mainApi;
