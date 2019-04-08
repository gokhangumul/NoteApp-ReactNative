import axios from 'axios';
import Token from '../../const/const';
import { USER_CATEGORY } from '../../actions/type';

export const UserCategories = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://tezservis.azurewebsites.net/api/category/usercategory',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': 'Bearer ' + Token.data
            },
            })
            .then(response => OkUserCategory(dispatch, response))
            .catch(() => console.log());
        };      
};
const OkUserCategory = (dispatch, response) => {
    dispatch({
        type: USER_CATEGORY,
        payload: response.data
    });
};
