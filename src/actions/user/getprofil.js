import axios from 'axios';
import Token from '../../const/const';
import { GETPROFIL } from '../../actions/type';

export const MyProfilRes = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/user/getuserprofil',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => MyProfilOk(dispatch, response))
                .catch((error) => MyProfilFail(dispatch, error));
        };      
};


const MyProfilOk = (dispatch, response) => {
    dispatch({
        type: GETPROFIL,
        payload: response.data
    });
};
const MyProfilFail = (dispatch, error) => {
    console.log(error.response);
};
