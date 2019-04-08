import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { Seo } from '../../helper/seo';
import { USER_ADDCAT, CATADD_OK } from '../../actions/type';

export const addcatchanged = (category) => {
    return (dispatch) => {
        dispatch({
            type: USER_ADDCAT,
            payload: category
        });
    };
};

export const AddNewUserCategory = ({ category }) => {
    return (dispatch) => {
        if (category === '') {
            Alert.alert('Hata', 'Kategori alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            const CategoryName = category;
            const Seflink = Seo(category);
            const isActive = 1;
            axios({
                method: 'post',
                url: 'http://tezservis.azurewebsites.net/api/category/createcategory',
                data: {
                    CategoryName,
                    isActive,
                    Seflink
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
        type: CATADD_OK
    });
    Actions.mycat();
};
