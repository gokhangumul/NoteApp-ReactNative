import axios from 'axios';
import Token from '../../const/const';
import { DELETEPUB_OK } from '../../actions/type';

export const DeletePub = ({ id }) => {
    console.log(id);
    return (dispatch) => {
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/publish/mypublishdelete/'.concat(id),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
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
        url: 'http://tezservis.azurewebsites.net/api/publish/mypublish',
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then(response => MyPubListOk(dispatch, response))
        .catch((error) => (error.response));
};      
const MyPubListOk = (dispatch, response) => {
    dispatch({
        type: DELETEPUB_OK,
        payload: response.data
    });
};
