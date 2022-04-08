import axios from "axios";
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_JOBS,
    FETCH_SINGLE_JOB
} from "./types";

import { ROOT_URL } from "./config";

let axiosConfig = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": localStorage.getItem("dans_token")
    }
};

const displayError = (error) => {
    if (!error) {
        return true;
    } else {
        console.log("error >> ", error);
        if (error.data.status === 403) {
            document.getElementById("error-connection").innerHTML =
                "<div style='position: fixed;top: 0;background: #a00000;padding: 10px;z-index: 999999;width: 100%;text-align: center;color: #fff;'>Forbidden Access</div>";
        } else if (error.data.status === 500) {
            document.getElementById("error-connection").innerHTML =
                "<div style='position: fixed;top: 0;background: #a00000;padding: 10px;z-index: 999999;width: 100%;text-align: center;color: #fff;'>Internal Server Error</div>";
        }

        return error.data;
    }
};

export const signinUser = ({ username, password }) => {
    return (dispatch) => {
        axios
            .post(`${ROOT_URL}/auth/sign-in`, {
                username,
                password
            })
            .then((response) => {
                console.log(response);
                if (response.data.status) {
                    dispatch({ type: AUTH_USER });
                    localStorage.setItem(
                        "dans_token",
                        response.data.data.token
                    );

                    window.location.href = "/";
                } else {
                    dispatch(authError(response.data.message));
                }
            })
            .catch((err) => {
                if (!err.response) {
                    dispatch(authError("Server is Down"));
                } else {
                    dispatch(authError("Bad login information"));
                }
            });
    };
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem("dans_token");
    setTimeout(function () {
        window.location.href = "/signin";
    }, 2500);
    return { type: UNAUTH_USER };
};

/**=======================================================================================
 * START DASHBOARD
 =======================================================================================*/
export const fetchJob = (params) => {
    return (dispatch) => {
        return axios
            .get(ROOT_URL + "/job/", {
                headers: {
                    "x-access-token": localStorage.getItem("dans_token")
                },
                params
            })
            .then((response) => {
                dispatch({
                    type: FETCH_JOBS,
                    payload: response.data
                });
                return response;
            })
            .catch((err) => {
                return displayError(err.response);
            });
    };
};

export const fetchSingleJob = (id) => {
    return (dispatch) => {
        return axios
            .get(ROOT_URL + "/job/" + id, {
                headers: {
                    "x-access-token": localStorage.getItem("dans_token")
                }
            })
            .then((response) => {
                dispatch({
                    type: FETCH_SINGLE_JOB,
                    payload: response.data
                });
                return response;
            })
            .catch((err) => {
                if (!err.response) {
                    connectionInternetError();
                    // connectionInternetError()
                } else {
                    return err.response.data;
                }
            });
    };
};

/**=======================================================================================
 * END DASHBOARD
 =======================================================================================*/
