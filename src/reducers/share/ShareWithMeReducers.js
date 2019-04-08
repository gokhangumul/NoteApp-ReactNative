import { LOG_OUT, SHAREWITHME_OK, SHAREMEUPDATE_OK } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHAREWITHME_OK:
            return action.payload;
        case SHAREMEUPDATE_OK:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
