import * as types from '../actionTypes'
import axios from 'axios';

export const getAllUser = (user) => {
    return {
        type: types.GETALLUSER,
        payload: user
    }
}

export const loadUser = (page) => {
    return function (dispatch) {
        axios.get('https://chom-phim.herokuapp.com/admin/users/' + page)
            .then(res => {
                dispatch(getAllUser(res.data.ListAccounts))
            })
            .catch(err => console.log(err))
    }

}