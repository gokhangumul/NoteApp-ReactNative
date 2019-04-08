import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Qs from 'query-string';
import { 
    EMAİL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_FAIL, 
    LOG_OUT, 
    LOGINUSER_SUCCES } from './type';
import Token from '../const/const';

export const emailchanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAİL_CHANGED,
            payload: email
        });
    };
};

export const passwordchanged = (password) => {
    return (dispatch) => {
       return dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const LoginUser = ({ email, password }) => {
        return (dispatch) => {
            if (email === '' && password === '') {
                Alert.alert('Hata', 'Mail ve şifre alanları boş geçilemez', 
                [{ text: 'Tamam', onPress: () => null }]);
            } else if (email === '') {
                Alert.alert('Hata', 'Mail alanı boş geçilemez', 
                [{ text: 'Tamam', onPress: () => null }]);
            } else if (password === '') {
                Alert.alert('Hata', 'Şifre alanı boş geçilemez', 
                [{ text: 'Tamam', onPress: () => null }]);
            } else {
                dispatch({ type: LOGIN_USER });
                const tdata = Qs.stringify(
                    // eslint-disable-next-line quote-props
                    { 'username': email, 'password': password, 'grant_type': 'password' });
                axios({
                    method: 'post',
                    url: 'http://tezservis.azurewebsites.net/getToken',
                    data: tdata,
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' 
                    },
                    })
                    .then(response => loginOk(dispatch, response.data.access_token))
                    .catch(() => loginFail(dispatch));
            }        
        };       
};
export const Logout = () => {
 Token.data = '';
 AsyncStorage.removeItem('token');
  return (dispatch) => {
      dispatch({
        type: LOG_OUT
      });
      Actions.login({ type: 'reset' });
  };
};
const loginOk = (dispatch, response) => {
    Token.data = response;
    AsyncStorage.setItem('token', response);
    dispatch({
            type: LOGINUSER_SUCCES
    });
    Actions.drawer();
};

const loginFail = (dispatch) => {
    Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı', 
    [{ text: 'Tamam', onPress: () => null }]);
    dispatch({
         type: LOGIN_FAIL,
         payload: ''
    });
};
