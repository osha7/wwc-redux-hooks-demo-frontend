import { API_URL } from '../../apiConstants';
import { FETCH_MUSICIANS, FETCH_MUSICIANS_SUCCESS, FETCH_MUSICIANS_FAILURE } from './actionConstants';

export const getMusicians = () => (dispatch) => {
    dispatch({ type: FETCH_MUSICIANS })

    fetch(API_URL + '/musicians')
    .then(res => res.json())
    .then(data => {
        console.log("data", data)
        return dispatch({ type: FETCH_MUSICIANS_SUCCESS, payload: data })
    })
    .catch(err => {
        return dispatch({ type: FETCH_MUSICIANS_FAILURE, payload: err })
    })
};