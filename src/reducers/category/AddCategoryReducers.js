import { USER_ADDCAT, CATADD_OK, LOG_OUT } from '../../actions/type';

const INITIAL_STATE = {
    category: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ADDCAT:
            return { ...state, category: action.payload };
        case CATADD_OK:
            return {};
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
