import axios from 'axios';
import Token from '../../const/const';
import { SHAREUSER_OK } from '../../actions/type';


export const ShareUser = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/share/usershareh',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => ShareUserOk(dispatch, response))
                .catch((error) => ShareUserFail(dispatch, error));
        };      
};
const ShareUserOk = (dispatch, response) => {
    dispatch({
        type: SHAREUSER_OK,
        payload: response.data
    });
};
const ShareUserFail = (dispatch, error) => {
    console.log(error.response);
};
