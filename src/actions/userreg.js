import { Alert } from 'react-native';
import axios from 'axios';
import { REG_MAİL, REG_PASS, USER_NICKNAME, USER_NAME, REGISTER_OK } from './type';

export const emailregchanged = (Mail) => {
    return (dispatch) => {
        dispatch({
            type: REG_MAİL,
            payload: Mail
        });
    };
};

export const passwordregchanged = (Hash) => {
    return (dispatch) => {
       return dispatch({
            type: REG_PASS,
            payload: Hash
        });
    };
};

export const nameregchanged = (Name) => {
    return (dispatch) => {
       return dispatch({
            type: USER_NAME,
            payload: Name
        });
    };
};

export const usernameregchanged = (Username) => {
    return (dispatch) => {
       return dispatch({
            type: USER_NICKNAME,
            payload: Username
        });
    };
};

export const UserReg = ({ Name, Mail, Hash, Username }) => {
    return (dispatch) => {
        if (Name === '' && Mail === '' && Hash === '' && Username === '') {
            Alert.alert('Hata', 'İsim, Kullanıcı adı, Mail ve Şifre alanları boş geçilemez!!!', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (Name === '') {
            Alert.alert('Hata', 'İsim alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (Mail === '') {
            Alert.alert('Hata', 'Mail alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (Username === '') {
            Alert.alert('Hata', 'Kullanıcı adı alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else if (Hash === '') {
            Alert.alert('Hata', 'Şifre alanı boş geçilemez', 
            [{ text: 'Tamam', onPress: () => null }]);
        } else {
            axios({
                method: 'post',
                url: 'http://tezservis.azurewebsites.net/api/user/Register',
                data: {
                    Name,
                    Mail,
                    Hash,
                    Username
                }
                })
                .then(response => RegisterOk(dispatch, response))
                .catch(() => LoginFail(dispatch));
        }  
    };       
};

const RegisterOk = (dispatch, response) => {
dispatch({
        type: REGISTER_OK
});
  console.log(response);
};

const LoginFail = (dispatch) => {
    console.log(dispatch);
};
