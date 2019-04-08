import { LOG_OUT, SHAREUSER_OK, SHAREDELETE_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHAREUSER_OK:
            return action.payload;
        case SHAREDELETE_OK:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
