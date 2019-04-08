import { LOG_OUT, SHARESULT_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHARESULT_OK:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
