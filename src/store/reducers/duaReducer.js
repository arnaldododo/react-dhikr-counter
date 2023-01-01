import {
    TOGGLE_TEXT
} from '../actionTypes/actionTypes';

const duaReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_TEXT:
            return !state;
        default:
            return state;
    }
};
export default duaReducer;