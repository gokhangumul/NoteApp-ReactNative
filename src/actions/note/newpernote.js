import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { Seo } from '../../helper/seo';
import { 
    NOTE_TITLE, 
    NOTE_DESCRIPTION, 
    NOTE_CONTENT,  
    NOTEADD_OK,
    CATEGORY_ID } from '../../actions/type';

export const titlechanged = (title) => {
    return (dispatch) => {
        dispatch({
            type: NOTE_TITLE,
            payload: title
        });
    };
};

export const descchanged = (description) => {
    return (dispatch) => {
       return dispatch({
            type: NOTE_DESCRIPTION,
            payload: description
        });
    };
};

export const contentchanged = (content) => {
    return (dispatch) => {
       return dispatch({
            type: NOTE_CONTENT,
            payload: content
        });
    };
};
export const categoryidchanged = (categoryid) => {
    return (dispatch) => {
       return dispatch({
            type: CATEGORY_ID,
            payload: categoryid
        });
    };
};

export const AddNewNoteSys = ({ title, description, content, categoryid }) => {
    return (dispatch) => {
        if (title === '' && description === '' && content === '' && categoryid === 0) {
            Alert.alert('Hata', 'Başlık, Açıklama, Kategori ve Not alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (title === '') {
            Alert.alert('Hata', 'Başlık alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (description === '') {
            Alert.alert('Hata', 'Açıklama alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (content === '') {
            Alert.alert('Hata', 'Not alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (categoryid === 0) {
            Alert.alert('Hata', 'Kategori alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
        const NoteSefLink = Seo(title);
        const NoteTitle = title;
        const NoteCreatedDate = new Date();
        NoteCreatedDate.setHours(NoteCreatedDate.getHours() + 3);
        console.log(NoteCreatedDate);
        const NoteDescription = description;
        const NoteContent = content;
        const NoteCategoryId = categoryid; 
        const isActive = 1;
        axios({
            method: 'post',
            url: 'http://tezservis.azurewebsites.net/api/note/createnote',
            data: {
                NoteTitle,
                NoteCreatedDate,
                NoteDescription,
                NoteContent,
                NoteCategoryId,
                NoteSefLink,
                isActive
            },
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => NewNoteOk(dispatch))
            .catch((error) => console.log(error));
        }
    };
};
export const AddNewNoteUsr = ({ title, description, content, categoryid }) => {
    return (dispatch) => {
        if (title === '' && description === '' && content === '' && categoryid === 0) {
            Alert.alert('Hata', 'Başlık, Açıklama, Kategori ve Not alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (title === '') {
            Alert.alert('Hata', 'Başlık alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (description === '') {
            Alert.alert('Hata', 'Açıklama alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (content === '') {
            Alert.alert('Hata', 'Not alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (categoryid === 0) {
            Alert.alert('Hata', 'Kategori alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
                const NoteSefLink = Seo(title);
                const NoteTitle = title;
                const NoteCreatedDate = new Date();
                NoteCreatedDate.setHours(NoteCreatedDate.getHours() + 3);
                const NoteDescription = description;
                const NoteContent = content;
                const privateNoteCategoryId = categoryid; 
                const isActive = 1;
                axios({
                    method: 'post',
                    url: 'http://tezservis.azurewebsites.net/api/note/createnote',
                    data: {
                        NoteTitle,
                        NoteCreatedDate,
                        NoteDescription,
                        NoteContent,
                        privateNoteCategoryId,
                        NoteSefLink,
                        isActive
                    },
                    headers: {
                        'Authorization': 'Bearer ' + Token.data
                    }
                    })
                    .then(() => NewNoteOk(dispatch))
                    .catch((error) => console.log(error));
        }
    };
};

const NewNoteOk = (dispatch) => {
    dispatch({
        type: NOTEADD_OK
    });
    Actions.note();
};
