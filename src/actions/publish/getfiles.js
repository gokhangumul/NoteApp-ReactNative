import axios from 'axios';
import Token from '../../const/const';
import { FILEOK } from '../type';
import { Actions } from 'react-native-router-flux';

export const GetMyfile = ({ id }) => {
    return (dispatch) => {
        axios({
            url: 'http://tezservis.azurewebsites.net/api/publish/getfiles/'.concat(id),
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
        })
        .then(response => FileOk(dispatch, response))
        .catch(error => console.log(error.response));
    };
};

const FileOk = (dispatch, response) => {
    dispatch({
        type: FILEOK,
        payload: response.data
    });
    Actions.pubfile();
};
