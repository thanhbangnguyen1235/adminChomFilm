import * as types from '../actionTypes';
import axios from 'axios';

export const getAllFilm = (film) => {
    return {
        type: types.GETALLFILM,
        payload: film
    }
}

export const getDetail = (film) => {
    return {
        type: types.GETALLFILM,
        payload: film
    }
}

export const loadFilm = (page) => {
    return function (dispatch) {
        axios.get('https://chom-phim.herokuapp.com/admin/films?page=' + page)
            .then(res => {
                dispatch(getAllFilm(res.data.ListFilms))
            })
            .catch(err => console.log(err))
    }
}

export const loadDetail = (id) => {
    return function (dispatch) {
        axios.get('https://chom-phim.herokuapp.com/film/' + id)
            .then(res => {
                dispatch(getDetail(res.data))
            })
            .catch(err => console.log(err))
    }
}