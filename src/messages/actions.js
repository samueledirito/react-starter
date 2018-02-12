import {SET_MESSAGE} from "./types";

export const setMessage = message => (dispatch) => {
    dispatch(createSetMessage(message));
};

export const createSetMessage = message => ({
    type: SET_MESSAGE,
    payload: {message}
});