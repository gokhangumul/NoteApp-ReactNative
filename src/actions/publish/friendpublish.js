import axios from 'axios';
import Token from '../../const/const';
import { MYFRIENDPUBLISH } from '../../actions/type';


export const MyFriendPubList = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/publish/friendpublish',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => MyFriendPubListOk(dispatch, response))
                .catch((error) => MyFriendPubListFail(dispatch, error));
        };      
};
const MyFriendPubListOk = (dispatch, response) => {
    dispatch({
        type: MYFRIENDPUBLISH,
        payload: response.data
    });
};
const MyFriendPubListFail = (dispatch, error) => {
   if (error.response.status === 404) {
       /////
   }
};
