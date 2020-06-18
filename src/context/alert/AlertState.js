import React, { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // SET ALERT
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            });
        }, 3000);
    };


    return (
        <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;