import { ADD_REMINDER, DELETE_REMINDER, CLEAN_REMINDERS } from '../constants';

const reminder = (action) => {
    const { text, dueDate } = action;
    return {
        text,
        dueDate,
        id: Math.random()
    }
};

const reminders = ( state = [], action = {} ) => {
    switch(action.type) {
        case ADD_REMINDER:
            return [
                ...state,
                reminder(action)
            ]
        case DELETE_REMINDER:
            return state.filter(reminder => reminder.id !== action.id);
        case CLEAN_REMINDERS:
            return []
        default: return state;
    }
};

export default reminders;