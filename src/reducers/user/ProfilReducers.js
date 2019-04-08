import { LOG_OUT, GETPROFIL, GETPROFILUPDATE } from '../../actions/type';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GETPROFIL:
            return action.payload;
        case GETPROFILUPDATE:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
        
    }
};
