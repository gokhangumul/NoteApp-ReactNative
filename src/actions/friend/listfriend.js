import axios from 'axios';
import Token from '../../const/const';
import { FRIEND_LIST } from '../../actions/type';


export const FriendList = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/friend/myfriend',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => FriendListOk(dispatch, response))
                .catch((error) => FriendListFail(dispatch, error));
        };      
};
const FriendListOk = (dispatch, response) => {
    dispatch({
        type: FRIEND_LIST,
        payload: response.data
    });
};
const FriendListFail = (dispatch, error) => {
    console.log(error.response);
};
