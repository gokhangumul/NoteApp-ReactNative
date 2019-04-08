import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { Seo } from '../../helper/seo';
import { UPDATEPUB_OK } from '../type';

export const UpdatePub = ({ PubContent, PubTitle, Id }) => {
    console.log(PubTitle);
    console.log(PubContent);
    console.log(Id);
    return (dispatch) => {
        if (PubTitle === '') {
            Alert.alert('Hata', 'Başlık alanı adı alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (PubContent === '') {
            Alert.alert('Hata', 'İçerik alanı adı alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
        const PubSefLink = Seo(PubTitle);
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/publish/mypublishupdate/'.concat(Id),
            data: {
                PubTitle,
                PubContent,
                PubSefLink,

            },
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => UpdatePublishOk(dispatch))
            .catch((error) => UpdatePublishFail(dispatch, error));
        }
    };
};
const UpdatePublishOk = (dispatch) => {
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
        type: UPDATEPUB_OK,
        payload: response.data
    });
    Actions.mypublish();
};
const UpdatePublishFail = (dispatch, error) => {
    console.log(error.response);
};
