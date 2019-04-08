import axios from 'axios';
import Token from '../../const/const';
import { SHARESULT_OK } from '../../actions/type';
import { Actions } from 'react-native-router-flux';


export const ShareResult = ({ notid }) => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/share/shus/'.concat(notid),
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => ShareResultOk(dispatch, response))
                .catch((error) => ShareResultFail(dispatch, error));
        };      
};
const ShareResultOk = (dispatch, response) => {
    dispatch({
        type: SHARESULT_OK,
        payload: response.data
    });
    Actions.sharresult();
};
const ShareResultFail = (dispatch, error) => {
    console.log(error.response);
};
