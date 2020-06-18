import {
    GET_USER,
    GET_USERS,
    SEARCH_USERS,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_USERS:
            return ({
                ...state,
                users: action.payload,
                loading: false
            });
        case SEARCH_USERS:
            return ({
                ...state,
                users: action.payload,
                loading: false
            });
        case CLEAR_USERS:
            return ({
                ...state,
                users: []
            });
        case GET_USER:
            return ({
                ...state,
                user: action.payload,
                loading: false
            });
        case GET_REPOS:
            return ({
                ...state,
                repos: action.payload
            });
        case SET_LOADING:
            return ({
                ...state,
                loading: true
            });
        default:
            return state;

    }
};