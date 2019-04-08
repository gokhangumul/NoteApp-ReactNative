import axios from 'axios';
import Token from '../../const/const';
import { FRIEND_RE, FRIEND_ACCEPT } from '../../actions/type';
import { Actions } from 'react-native-router-flux';


export const FriendReqList = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/friend/myfriendreq',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => FriendReqListOk(dispatch, response))
                .catch((error) => FriendReqListFail(dispatch, error));
        };      
};
export const AcFriendReq = ({ id }) => {
    return (dispatch) => {
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/friend/okfriendrequest/'.concat(id),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => AcFriendReqOk(dispatch))
            .catch((error) => AcFriendReqFail(dispatch, error));
    };
};
export const RejFriendReq = ({ id }) => {
    return (dispatch) => {
        axios({
            method: 'delete',
            url: 'http://tezservis.azurewebsites.net/api/friend/deletefriend/'.concat(id),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => RejFriendReqOk(dispatch))
            .catch((error) => RejFriendReqFail(dispatch, error));
    };
};
export const DeleteFriend = ({ id }) => {
    return (dispatch) => {
        axios({
            method: 'delete',
            url: 'http://tezservis.azurewebsites.net/api/friend/deletefriend/'.concat(id),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => DeleteFriendReqOk())
            .catch((error) => DeleteFriendReqFail(dispatch, error));
    };
};
/////////////////////////////////////
const FriendReqListOk = (dispatch, response) => {
    dispatch({
        type: FRIEND_RE,
        payload: response.data
    });
};
const FriendReqListFail = (dispatch, error) => {
    console.log(error.response);
};
///////////////////////////////////////
const AcFriendReqOk = (dispatch) => {
    dispatch({
        type: FRIEND_ACCEPT
    });
    Actions.myfriend();
};
const AcFriendReqFail = (dispatch, error) => {
    console.log(error.response);
};
////////////////////////////////////
const RejFriendReqOk = () => {
   Actions.drawer();
};
const RejFriendReqFail = (dispatch, error) => {
    console.log(error.response);
};
/////////////////////
const DeleteFriendReqOk = () => {
    Actions.drawer();
};
const DeleteFriendReqFail = (dispatch, error) => {
    console.log(error.response);
};
