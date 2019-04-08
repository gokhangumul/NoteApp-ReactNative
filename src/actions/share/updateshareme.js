import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { SHAREMEUPDATE_OK } from '../type';

export const UpdateShareUsr = 
    ({ NoteTitle, NoteContent, NoteDescription, privateNoteCategoryId, NoteSefLink }) => {
        console.log('kullanıcı güncel');
        console.log('özel kategori', privateNoteCategoryId);
        console.log('title', NoteTitle);
    return (dispatch) => {
        if (NoteTitle === '' && NoteDescription === '' && 
            NoteContent === '' && privateNoteCategoryId === 0) {
            Alert.alert('Hata', 'Başlık, Açıklama, Kategori ve Not alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteTitle === '') {
            Alert.alert('Hata', 'Başlık alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteDescription === '') {
            Alert.alert('Hata', 'Açıklama alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteContent === '') {
            Alert.alert('Hata', 'Not alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (privateNoteCategoryId === 0) {
            Alert.alert('Hata', 'Kategori alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
        const NoteModifiedDate = new Date();
        NoteModifiedDate.setHours(NoteModifiedDate.getHours() + 3);
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/note/updatenote/'.concat(NoteSefLink),
            data: {
                NoteTitle,
                NoteDescription,
                NoteContent,
                NoteModifiedDate,
                privateNoteCategoryId
            },
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => UpdateShareOk(dispatch))
            .catch((error) => console.log(error.response));
        }
    };
};
export const UpdateShareSys = 
({ NoteTitle, NoteContent, NoteDescription, NoteCategoryId, NoteSefLink }) => {
    console.log('title', NoteTitle);
    console.log('NoteCategoryId', NoteCategoryId);
    console.log('sys güncel');
    return (dispatch) => {
        if (NoteTitle === '' && NoteDescription === '' 
        && NoteContent === '' && NoteCategoryId === 0) {
            Alert.alert('Hata', 'Başlık, Açıklama, Kategori ve Not alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteTitle === '') {
            Alert.alert('Hata', 'Başlık alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteDescription === '') {
            Alert.alert('Hata', 'Açıklama alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteContent === '') {
            Alert.alert('Hata', 'Not alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (NoteCategoryId === 0) {
            Alert.alert('Hata', 'Kategori alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
                const NoteModifiedDate = new Date();
                const privateNoteCategoryId = null;
                console.log(privateNoteCategoryId);
                NoteModifiedDate.setHours(NoteModifiedDate.getHours() + 3);
                axios({
                    method: 'put',
                    url: 'http://tezservis.azurewebsites.net/api/note/updatenote/'.concat(NoteSefLink),
                    data: {
                        NoteTitle,
                        NoteModifiedDate,
                        NoteDescription,
                        NoteContent,
                        NoteCategoryId,
                        privateNoteCategoryId
                    },
                    headers: {
                        'Authorization': 'Bearer ' + Token.data
                    }
                    })
                    .then(() => UpdateShareOk(dispatch))
                    .catch((error) => console.log(error));
        }
    };
};

const UpdateShareOk = (dispatch) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/share/usershare',
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then(response => UpdateShareListOk(dispatch, response))
        .catch((error) => UpdateShareFail(dispatch, error));
};
const UpdateShareListOk = (dispatch, response) => {
    dispatch({
        type: SHAREMEUPDATE_OK,
        payload: response.data
    });
    Actions.pop();
};

const UpdateShareFail = (dispatch, error) => {
   console.log(error.response);
};
