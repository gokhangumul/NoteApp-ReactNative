import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { FRIEND_GETADD, FRIEND_POSTADD } from '../type';

export const adduserchanged = (user) => {
    return (dispatch) => {
        dispatch({
            type: FRIEND_GETADD,
            payload: user
        });
    };
};

export const GetMyNewFriend = ({ user }) => {
    return (dispatch) => {
        if (user === '') {
            Alert.alert('Hata', 'Kullanıcı adı alanını boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/friend/getaddfriend/'.concat(user),
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                }
                })
                .then((response) => GetFriendOk(dispatch, response))
                .catch((error) => GetFriendFail(dispatch, error));
        }
    };
};

const GetFriendOk = (dispatch, response) => {
    if (response.status === 200) {
        Actions.postf({ datax: response.data, yourfriend: 'Arkadaşlarımdan çıkar' });
    } 
    if (response.status === 201) {
        Actions.postf({ dataz: response.data, reqfriend: 'İstek gönderİldİ' });
    } 
    if (response.status === 202) {
        Actions.postf({ data: response.data, addfriend: 'Ekle' });
    }
    if (response.status === 204) {
        Actions.postf({ retfriend: 'Kendini ekleyemezsin' });
    } 
};
const GetFriendFail = (dispatch, error) => {
    if (error.response.status === 404) {
        Actions.postf({ 
            nofriend: 'Böyle bir kullanıcı bulunamadı kullanıcı adını kontrol ediniz.' });
    } else {
        console.log(error);
    }
};

export const PostAddNewFriend = ({ id }) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://tezservis.azurewebsites.net/api/friend/adduserfriend/'.concat(id),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => PostFriendOk(dispatch))
            .catch((error) => PostFriendFail(dispatch, error));
    };
};
const PostFriendOk = (dispatch) => {
    dispatch({
        type: FRIEND_POSTADD
    });
    Actions.myfriend();
};
const PostFriendFail = (dispatch, error) => {
    console.log(error.response);
};

