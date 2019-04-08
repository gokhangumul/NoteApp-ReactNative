import { FRIEND_RE, LOG_OUT } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FRIEND_RE:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
