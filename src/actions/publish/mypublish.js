import axios from 'axios';
import Token from '../../const/const';
import { MYPUBLISH } from '../../actions/type';


export const MyPubList = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/publish/mypublish',
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
        type: MYPUBLISH,
        payload: response.data
    });
};
const MyPubListFail = (dispatch, error) => {
    console.log(error.response);
};
