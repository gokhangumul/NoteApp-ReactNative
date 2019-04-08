import axios from 'axios';
import Token from '../../const/const';
import { SHAREWITHME_OK } from '../../actions/type';


export const ShareWithMe = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/share/usershare',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => MyPubListOk(dispatch, response))
                .catch((error) => MyPubListFail(dispatch, error));
        };      
};
const MyPubListOk = (dispatch, response) => {
    dispatch({
        type: SHAREWITHME_OK,
        payload: response.data
    });
};
const MyPubListFail = (dispatch, error) => {
    console.log(error.response);
};
