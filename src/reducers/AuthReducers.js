import { 
    EMAİL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_FAIL, 
    LOG_OUT, 
    LOGINUSER_SUCCES } from '../actions/type';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    loadingfail: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAİL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGINUSER_SUCCES:
            return { ...state, loading: false };
        case LOGIN_FAIL:
            return { ...state, loadingfail: action.payload, loading: false, email: '', password: '' };
        case LOG_OUT : 
            return { ...state, email: '', password: '' };
        default:
            return state;
        
    }
};
