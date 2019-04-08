import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Token from '../../const/const';
import { GETPROFILUPDATE } from '../../actions/type';

export const UpdatePro = ({ Name, UserName, Mail, Pass }) => {
    const Hash = Pass;
    return (dispatch) => {
        axios({
            method: 'put',
            url: 'http://tezservis.azurewebsites.net/api/user/updateprofil',
            headers: {
                'Authorization': 'Bearer ' + Token.data
            },
            data: {
                Name,
                UserName,
                Mail,
                Hash
            }
            })
            .then(() => MyProfilUpdateOk(dispatch))
            .catch((error) => MyProfilUpdateFail(dispatch, error));
    };      
};
const MyProfilUpdateOk = (dispatch) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/user/getuserprofil',
        headers: {
            'Authorization': 'Bearer ' + Token.data
        },
        })
        .then((response) => MyProfilUpdateListOk(dispatch, response))
        .catch((error) => console.log(error));
};

const MyProfilUpdateListOk = (dispatch, response) => {
    dispatch({
        type: GETPROFILUPDATE,
        payload: response.data
    });
    Actions.pop();
};
const MyProfilUpdateFail = (dispatch, error) => {
    console.log(error.response);
};
