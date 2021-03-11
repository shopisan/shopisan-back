import {getToken, refreshJWT} from "./Auth";
import axios from "axios";

window.refreshToken = true;

// return the user data from the session storage
export default function setAxiosDefaults(axios){
    let userToken = getToken();
    if (null !== userToken){
        console.log("set Token");
        axios.defaults.headers["Authorization"] = `Token ${userToken}`;
    }
    axios.defaults.headers['Content-Type'] = 'application/json';

    axios.interceptors.response.use(
        response => { 

            if (response.success !== false){
                response.success = true
            }

            return response
        },
        error => {

            if (undefined !== error.response){
                const {status} = error.response;
                error.response.success = false;
                return error.response;
            }
        }
    );
}



