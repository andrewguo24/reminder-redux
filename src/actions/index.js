import { ADD_REMINDER, DELETE_REMINDER, CLEAN_REMINDERS, RECEIVE_DATA, REQUEST_DATA, REQUEST_FAILED } from "../constants";

export const addReminder = (event, date) => ({
    type: ADD_REMINDER,
    event,
    date
});

export const deleteReminder = (id) => ({
    type: DELETE_REMINDER,
    id
});

export const cleanReminders = (id) =>  ({
    type: CLEAN_REMINDERS,
    id
});

export const requestData = () => ({
    type: REQUEST_DATA,
});

export const receiveData = data => ({
    type: RECEIVE_DATA,
    data
});

export const requestFailed = () => ({
    type: REQUEST_FAILED,
});


export const fetchData = () => async (dispatch) => {
    try {
        dispatch(requestData());
        const response = await fetch('./local.json')
        if (!response.ok) throw 'Response not OK'
        const json = await response.json();
        dispatch(receiveData(json))
    } catch (e) {
        dispatch(requestFailed())
        console.log('error:', e)
    }
}

