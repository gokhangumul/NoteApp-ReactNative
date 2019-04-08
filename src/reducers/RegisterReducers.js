import { REG_MAİL, REG_PASS, USER_NICKNAME, USER_NAME, REGISTER_OK } 
from '../actions/type';

const INITIAL_STATE = {
    Name: '',
    Username: '',
    Mail: '',
    Hash: '',
    RegisterOk: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_NAME:
            return { ...state, Name: action.payload };
        case USER_NICKNAME:
            return { ...state, Username: action.payload };
        case REG_MAİL:
            return { ...state, Mail: action.payload };
        case REG_PASS:
            return { ...state, Hash: action.payload };
        case REGISTER_OK:
            return { ...state, RegisterOk: true };
        default:
            return state;
        
    }
};
