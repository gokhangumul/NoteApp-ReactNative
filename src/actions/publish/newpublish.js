import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { PUBCONTENT, PUB_TITLE, PUB_OK } from '../../actions/type';
import { Seo } from '../../helper/seo';


export const pubcontentchanged = (content) => {
    return (dispatch) => {
        dispatch({
            type: PUBCONTENT,
            payload: content
        });
    };
};
export const pubtitlechanged = (title) => {
    return (dispatch) => {
        dispatch({
            type: PUB_TITLE,
            payload: title
        });
    };
};

export const AddMyPub = ({ title, content }) => {
    return (dispatch) => {
        if (title === '' && content === '') {
            Alert.alert('Hata', 'Başlık, İçerik alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (title === '') {
            Alert.alert('Hata', 'Başlık alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (content === '') {
            Alert.alert('Hata', 'İçerik alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            const PubSefLink = Seo(title);
            const PubTitle = title;
            const PubCreatedDate = new Date();
            PubCreatedDate.setHours(PubCreatedDate.getHours() + 3);
            const isActive = 1;
            const PubContent = content;
            axios({
                method: 'post',
                url: 'http://tezservis.azurewebsites.net/api/publish/mypublishadd',
                headers: {
                    'Authorization': 'Bearer ' + Token.data
                },
                data: {
                    PubTitle,
                    PubContent,
                    PubSefLink,
                    PubCreatedDate,
                    isActive
                }
                })
                .then(() => AddMyPubOk(dispatch))
                .catch((error) => AddMyPubFail(dispatch, error));
        } 
    };      
};
const AddMyPubOk = (dispatch) => {
    dispatch({
        type: PUB_OK,
    });
    Actions.mypublish();
};
const AddMyPubFail = (dispatch, error) => {
    console.log(error.response);
};
