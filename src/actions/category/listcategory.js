import axios from 'axios';
import Token from '../../const/const';
import { USER_CATLIST, DELETE_CATEGORY } from '../../actions/type';
import { Actions } from 'react-native-router-flux';

export const UserCategoriesList = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://tezservis.azurewebsites.net/api/category/usercategory',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': 'Bearer ' + Token.data
            },
            })
            .then(response => OkCategory(dispatch, response))
            .catch(() => console.log());
        };      
};
export const UserCategoryDelete = ({ sef }) => {
    return (dispatch) => {
        const isActive = 0;
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/category/getdelete/'.concat(sef),
            data: {
                isActive 
            },
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => OkDeleteCategory(dispatch))
            .catch((error) => console.log(error.response));
        };      
};

const OkCategory = (dispatch, response) => {
    dispatch({
        type: USER_CATLIST,
        payload: response.data
    });
};
const OkDeleteCategory = (dispatch) => {
    dispatch({
        type: DELETE_CATEGORY
    });
   Actions.drawer();
};

