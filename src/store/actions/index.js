import * as actiontype from '../actionTypes/actionTypes';

export const increment = () => {
    return {
        type: actiontype.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actiontype.DECREMENT
    };
};

export const reset = () => {
    return {
        type: actiontype.RESET
    };
};

export const toggleText = () => {
    return {
        type: actiontype.TOGGLE_TEXT
    };
};