import { LOG_OUT, MYPUBLISH, PUB_OK, UPDATEPUB_OK, DELETEPUB_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MYPUBLISH:
            return action.payload;
        case PUB_OK: 
            return INITIAL_STATE;
        case DELETEPUB_OK: 
            return action.payload;
        case UPDATEPUB_OK:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
