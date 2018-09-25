import { ADD_REMINDER, DELETE_REMINDER, CLEAN_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    const { text, dueDate } = action;
    return {
        text,
        dueDate,
        id: Math.random()
    }
};

const reminders = ( state = read_cookie("reminders") || [], action = {} ) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ];
            bake_cookie("reminders", reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminders", reminders);
            return reminders;
        case CLEAN_REMINDERS:
            reminders = [];
            bake_cookie("reminders", reminders);
            return reminders;
        default: return state;
    }
};

export default reminders;