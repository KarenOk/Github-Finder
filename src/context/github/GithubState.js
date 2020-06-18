import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import {
    GET_USER,
    GET_USERS,
    SEARCH_USERS,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS
} from "../types";
import Axios from "axios";

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // GET USERS 
    const getUsers = async () => {
        setLoading();
        const res = await Axios.get(
            `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    };

    // SEARCH USERS
    const searchUsers = async (searchString) => {
        setLoading();
        const res = await Axios.get(
            `https://api.github.com/search/users?q=${searchString}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    // GET USER
    const getUser = async (username) => {
        setLoading();

        const res = await Axios.get(
            `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );

        dispatch({
            type: GET_USER,
            payload: res.data
        });

    };

    // GET REPOS
    const getUserRepos = async (username) => {
        setLoading();

        const res = await Axios.get(
            `https://api.github.com/users/${username}/repos?sort=updated&type=all&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });

    };

    // CLEAR USERS
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // SET LOADING
    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    };


    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;