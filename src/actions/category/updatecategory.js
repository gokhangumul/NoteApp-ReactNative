import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';

export const UpdateUserCategory = ({ CategoryName, Seflink }) => {
    console.log('sef', Seflink);
    console.log('name', CategoryName);
    return (dispatch) => {
        if (CategoryName === '') {
            Alert.alert('Hata', 'Kategori adı alanı boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
        const NoteModifiedDate = new Date();
        NoteModifiedDate.setHours(NoteModifiedDate.getHours() + 3);
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/category/updatecategory/'.concat(Seflink),
            data: {
                CategoryName,
            },
            headers: {
                'Authorization': 'Bearer ' + Token.data
            }
            })
            .then(() => UpdateNoteOk(dispatch))
            .catch((error) => console.log(error.response));
        }
    };
};
const UpdateNoteOk = () => {
    Actions.drawer();
};
