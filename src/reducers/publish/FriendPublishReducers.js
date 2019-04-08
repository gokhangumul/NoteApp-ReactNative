import { LOG_OUT, MYFRIENDPUBLISH } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MYFRIENDPUBLISH:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
