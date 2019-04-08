import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { COMMENTADD_OK } from '../../actions/type';

export const AddPubComment = ({ CommentContent, Id }) => {
    return (dispatch) => {
        if (CommentContent === '') {
            Alert.alert('Hata', 'Yorum alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            const CommnetPubId = Id;
            axios({
                method: 'post',
                url: 'http://tezservis.azurewebsites.net/api/publish/addcomment',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                data: {
                    CommentContent,
                    CommnetPubId 
                }
                })
                .then(() => AddCommentPubOk(dispatch, Id))
                .catch((error) => AddCommentPubFail(dispatch, error));
        } 
    };      
};
export const AddFriendComment = ({ CommentContent, PublishId }) => {
    return (dispatch) => {
        if (CommentContent === '') {
            Alert.alert('Hata', 'Yorum alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            const CommnetPubId = PublishId;
            axios({
                method: 'post',
                url: 'http://tezservis.azurewebsites.net/api/publish/addcomment',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                data: {
                    CommentContent,
                    CommnetPubId 
                }
                })
                .then(() => AddFriendCommentOk(dispatch, PublishId))
                .catch((error) => AddFriendCommentFail(dispatch, error));
        } 
    };      
};
const AddCommentPubOk = (dispatch, Id) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/publish/getcomment/'.concat(Id),
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then(response => MyPubListOk(dispatch, response))
        .catch((error) => (error.response));
};      
const MyPubListOk = (dispatch, response) => {
    dispatch({
        type: COMMENTADD_OK,
        payload: response.data
    });
    Actions.publishcom();
};
const AddCommentPubFail = (dispatch, error) => {
    console.log(error.response);
};
/////////////////////////////////////////////////////////////////////////////////////
const AddFriendCommentOk = (dispatch, PublishId) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/publish/getcomment/'.concat(PublishId),
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then(response => FriendComOk(dispatch, response))
        .catch((error) => (error.response));
};      
const FriendComOk = (dispatch, response) => {
    dispatch({
        type: COMMENTADD_OK,
        payload: response.data
    });
    Actions.publishcom();
};
const AddFriendCommentFail = (dispatch, error) => {
    console.log(error.response);
};
