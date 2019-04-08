import {
     NOTE_TITLE,
     NOTE_DESCRIPTION, 
     NOTE_CONTENT, 
     LOG_OUT,
     NOTEADD_OK,
     CATEGORY_ID } from '../../actions/type';

const INITIAL_STATE = {
    title: '',
    description: '',
    content: '',
    categoryid: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTE_TITLE:
            return { ...state, title: action.payload };
        case NOTE_DESCRIPTION:
            return { ...state, description: action.payload };
        case NOTE_CONTENT:
            return { ...state, content: action.payload };
        case CATEGORY_ID:
            return { ...state, categoryid: action.payload };
        case LOG_OUT:
            return INITIAL_STATE;
        case NOTEADD_OK:
            return {};
        default:
            return state;
        
    }
};
