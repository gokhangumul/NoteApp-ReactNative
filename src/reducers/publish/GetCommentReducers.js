import { LOG_OUT, COMMENTGET_OK, COMMENTGET_FAIL, COMMENTADD_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMMENTGET_OK:
            return action.payload;
        case LOG_OUT:
            return {};
        case COMMENTGET_FAIL :
            return {};
        case COMMENTADD_OK:
            return action.payload;
        default:
            return state;
        
    }
};
