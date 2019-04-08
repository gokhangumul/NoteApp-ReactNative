import { PERNOTE_KEY, LOG_OUT, NOTEADD_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PERNOTE_KEY:
            return action.payload;
        case LOG_OUT:
            return {};
        case NOTEADD_OK:
            return INITIAL_STATE;
        default:
            return state;
        
    }
};
