import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';

export const ShareUserMyNote = ({ name, Id }) => {
    return (dispatch) => {
        if (name === '') {
            Alert.alert('Hata', 'Kullanıcı adı alanını boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
           axios({
            method: 'get',
            url: 'http://tezservis.azurewebsites.net/api/user/userid/'.concat(name),
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then((gelen) => UserOk(dispatch, gelen, Id, name))
            .catch((error) => UserFail(dispatch, error));
        }
    };
};

const UserOk = (dispatch, gelen, Id, name) => {
    const ToUserId = gelen.data.Id;
    const NotId = Id;
    const IsActive = 1;
    // eslint-disable-next-line camelcase
    const Share_CreatedDate = new Date();
    axios({
        method: 'post',
        url: 'http://tezservis.azurewebsites.net/api/note/share',
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        data: {
           NotId,
           ToUserId,
           IsActive,
           Share_CreatedDate
        }
        })
        .then((response) => ShareOk(dispatch, response, name))
        .catch((error) => ShareFail(dispatch, error, name));
};

const ShareOk = (dispatch, response, name) => {
    if (response.status === 200) {
        Actions.shareres({ 
            yourfriend: 
            'Notunuz başarılı bir şekilde '.concat(name).concat(' ile paylaşılmıştır.') });
    } 
 };

 const ShareFail = (dispatch, error, name) => {
     if (error.response.status === 404) {
        Actions.shareres({ 
            sharefail: 'Notunuz başarılı bir şekilde daha önce '
            .concat(name).concat(' ile paylaşılmıştır.') });
     }
 };

 const UserFail = (dispatch, error) => {
    console.log('user hatası', error.response);
 };
