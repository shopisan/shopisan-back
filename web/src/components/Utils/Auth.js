import axios from 'axios';
import setAxiosDefaults from "./Common";
import {Redirect} from "react-router-dom";
import React from "react";

export const isUserConnected = async () => {
    /**
     * @todo nope plûtot configurer chaque call axios pour inclure le bearer et si 401 --> disconnect ou refresh le token
     */
    /*return new Promise((resolve => {
        axios.get("/auth/is_connected").then((resp) => {
            if (resp.status === 200){
                let isConnected = resp.data.isConnected;
                if (!isConnected){
                    sessionStorage.removeItem('token');
                }
                resolve(isConnected);
            }
            resolve(false);
        });
    }))*/
}

// return the token from the session storage
export const getToken = () => {
    console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    // axios.get("/auth/logout").then(() => {
    sessionStorage.removeItem('token');
    setAxiosDefaults(axios);
    document.dispatchEvent(new Event("connectionUpdated"));
    // window.location.reload();
    // });
}

export function getUser(){
    return new Promise((resolve, reject) => {
        axios.get("/api/user").then(response => {
            // setLoading(false);
            console.log(response)
            if (response.data !== null){
                resolve(response.data);
            } else {
                setUserSession(null);
                resolve(null);
            }
        });
    })

}

// set the token and user from the session storage
export const setUserSession = (data) => {
    if (null !== data){
        sessionStorage.setItem('token', data.token);
    } else {
        sessionStorage.removeItem('token');
    }
    console.log("user session set");

    setAxiosDefaults(axios);
    document.dispatchEvent(new Event("connectionUpdated"));
}

export function refreshJWT(){
    /**
     * @todo see https://blog.liplex.de/improve-security-when-working-with-jwt-and-symfony/
     *      ==> Improve security
     */
    return new Promise(resolve => {
        if (null !== getToken()){
            let refreshToken = sessionStorage.getItem("refreshToken");
            axios.post("/api/token/refresh", {refresh_token: refreshToken}).then(response => {
                if (undefined !== response && response.data){
                    setUserSession(response.data);
                    resolve(response.data);
                } else {
                    resolve(false);
                    console.log("Fuck no! Sounds good doesn't work...")
                }
            });
        } else {
            resolve(false);
        }
    });
}

export function login(username, password){
    return new Promise((resolve, reject) => {
        axios.post("/api/token-auth/", {username, password}).then(response => {
            if (response.success){
                console.log(response.data);
                setUserSession(response.data);
                resolve(true)
            }

            resolve("Retourner l'erreur");
        })
    })
}
