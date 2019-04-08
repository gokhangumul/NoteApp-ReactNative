import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { SHAREDELETE_OK } from '../../actions/type';

export const DeleteShare = ({ userid, notid }) => {
    
    return (dispatch) => {
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/share/deleteshare/'.concat(userid).concat('/').concat(notid),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            },
            })
            .then(() => DeleteOK(dispatch))
            .catch((error) => console.log(error.response));
    };   
};

const DeleteOK = (dispatch) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/share/usershareh',
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then(response => ShareListOk(dispatch, response))
        .catch((error) => ShareListFail(dispatch, error));
};      
const ShareListOk = (dispatch, response) => {
    dispatch({
        type: SHAREDELETE_OK,
        payload: response.data
    });
    Actions.pop();
};
const ShareListFail = (dispatch, error) => {
    if (error.response.status === 400) {
        Actions.drawer();
    }
    console.log(error.response);
};
