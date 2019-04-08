import axios from 'axios';
import Token from '../../const/const';
import { COMMENTGET_OK, COMMENTGET_FAIL } from '../../actions/type';
import { Actions } from 'react-native-router-flux';


export const MyPubComment = ({ pubid }) => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/publish/getcomment/'.concat(pubid),
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => MyPubCommentOk(dispatch, response))
                .catch((error) => MyPubCommentFail(dispatch, error));
        };      
};
const MyPubCommentOk = (dispatch, response) => {
    dispatch({
        type: COMMENTGET_OK,
        payload: response.data
    });
    Actions.publishcom();
};
const MyPubCommentFail = (dispatch, error) => {
    if (error.response.status === 400) {
        dispatch({
            type: COMMENTGET_FAIL
        });
        Actions.publishcom();
    }
    console.log(error.response);
};
