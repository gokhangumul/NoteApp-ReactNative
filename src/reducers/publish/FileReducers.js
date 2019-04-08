import { LOG_OUT, FILEOK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILEOK:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
