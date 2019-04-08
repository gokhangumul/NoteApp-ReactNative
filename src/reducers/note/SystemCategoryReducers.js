import { SYSTEM_CATEGORY, LOG_OUT, DELETE_CATEGORY } from '../../actions/type';

const INITIAL_STATE = {
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SYSTEM_CATEGORY:
            return action.payload;
        case LOG_OUT:
            return {};
        case DELETE_CATEGORY:
            return INITIAL_STATE;
        default:
            return state;
        
    }
};
