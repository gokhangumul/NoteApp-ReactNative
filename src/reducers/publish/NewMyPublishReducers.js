import { PUB_TITLE, PUBCONTENT, LOG_OUT, PUB_OK, UPDATEPUB_OK } from '../../actions/type';

const INITIAL_STATE = {
   title: '',
   content: ''
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case PUB_TITLE:
           return { ...state, title: action.payload };
       case PUBCONTENT:
           return { ...state, content: action.payload };
       case LOG_OUT:
           return INITIAL_STATE;
       case PUB_OK:
           return {};
       case UPDATEPUB_OK:
            return {};
       default:
           return state;
       
   }
};
