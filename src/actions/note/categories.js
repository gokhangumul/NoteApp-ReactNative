import axios from 'axios';
import Token from '../../const/const';
import { SYSTEM_CATEGORY } from '../../actions/type';

export const SystemCategory = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://tezservis.azurewebsites.net/api/category/systemcategory',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': 'Bearer ' + Token.data
            },
            })
            .then(response => OkSystemCategory(dispatch, response))
            .catch(() => console.log());
        };      
};
const OkSystemCategory = (dispatch, response) => {
    dispatch({
        type: SYSTEM_CATEGORY,
        payload: response.data
    });
};
