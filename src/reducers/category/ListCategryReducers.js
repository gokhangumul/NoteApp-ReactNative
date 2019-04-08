import { USER_CATLIST, LOG_OUT, CATADD_OK } from '../../actions/type';

const INITIAL_STATE = {
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CATLIST:
            return action.payload;
        case CATADD_OK:
            return INITIAL_STATE;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
