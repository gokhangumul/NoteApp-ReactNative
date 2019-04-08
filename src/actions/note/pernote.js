import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { PERNOTE_KEY, PERNOTE_ZERO, LOADING } from '../../actions/type';


export const PerNoteList = () => {
    return (dispatch) => {
            axios({
                method: 'get',
                url: 'http://tezservis.azurewebsites.net/api/note/usernote',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Authorization': 'Bearer ' + Token.data
                },
                })
                .then(response => NoteOK(dispatch, response))
                .catch(() => NoteFail(dispatch));
        };      
};
export const Delete = ({ id }) => {
    console.log(id);
    return (dispatch) => {
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/note/deletenote/'.concat(id),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': 'Bearer ' + Token.data
            },
            })
            .then(() => DeleteOK(dispatch))
            .catch((error) => console.log(error.response));
    };   
};

const DeleteOK = () => {
    Actions.drawer();
};

const NoteOK = (dispatch, response) => {
        dispatch({
            type: PERNOTE_KEY,
            payload: response.data
        });
        dispatch({
            type: LOADING
        });
};

const NoteFail = () => (dispatch) => {
    dispatch({
        type: PERNOTE_ZERO
    });
};
