import { 
    FRIEND_LIST, LOG_OUT, FRIEND_POSTADD, FRIEND_ACCEPT } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FRIEND_LIST:
            return action.payload;
        case FRIEND_POSTADD:
            return INITIAL_STATE;
        case FRIEND_ACCEPT:
            return INITIAL_STATE;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
