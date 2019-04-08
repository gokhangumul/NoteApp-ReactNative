import axios from 'axios';
import Token from '../const/const';

export const Userid = (name) => {
    axios({
        method: 'get',
        url: 'http://tezservis.azurewebsites.net/api/user/userid/'.concat(name),
        headers: {
            'Authorization': 'Bearer ' + Token.data
        }
        })
        .then((response) => UserOk(response))
        .catch((error) => UserFail(error));
};
const UserOk = (response) => {
    return response.data.Id;
};
const UserFail = (error) => {
    return error.response;
};
