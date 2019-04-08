import { FRIEND_GETADD, LOG_OUT } from '../../actions/type';

const INITIAL_STATE = {
    user: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FRIEND_GETADD:
            return { ...state, user: action.payload };
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
