import { ADD_REMINDER, DELETE_REMINDER, CLEAN_REMINDERS } from "../constants";

export const addReminder = (text, dueDate) => {
    return {
        type: ADD_REMINDER,
        text,
        dueDate
    }
};

export const deleteReminder = (id) => {
    return {
        type: DELETE_REMINDER,
        id
    }
};

export const cleanReminders = (id) => {
    return {
        type: CLEAN_REMINDERS,
        id
    }
};