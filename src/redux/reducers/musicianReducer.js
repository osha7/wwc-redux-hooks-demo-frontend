import { FETCH_MUSICIANS, FETCH_MUSICIANS_SUCCESS, FETCH_MUSICIANS_FAILURE } from '../actions/actionConstants';

const initialState = {
    musicians: [],
    isLoading: false,
    error: ""
};

const musicianReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MUSICIANS:
            return {...state, isLoading: true, error: ""}

        case FETCH_MUSICIANS_SUCCESS:
            const musicians = action.payload.musicians
            return {...state, isLoading: false, musicians: musicians}

        case FETCH_MUSICIANS_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        default:
            return state
    };
};

export default musicianReducer;