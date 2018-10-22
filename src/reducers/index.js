import {
    ADD_REMINDER,
    DELETE_REMINDER,
    CLEAN_REMINDERS,
    RECEIVE_DATA,
    REQUEST_DATA,
    REQUEST_FAILED
} from "../constants";

const initialState = {
    data: [],
    isFetching: false,
    showError: false
}

const reminders = ( state = initialState, action = {} ) => {
    switch(action.type) {
        case ADD_REMINDER:
            return {
                ...state,
                data: state.data.concat({   //concat adding new items but doesn't change the original array and return new array
                    date: action.date,
                    id: state.data.length,  //id equal to length of the data array
                    event: action.event
                })
            };

        case DELETE_REMINDER:
            const data = state.data.filter((item) => item.id !== action.id)   //Use filter() method to delete
            return {
                ...state,
                data
            };

        case CLEAN_REMINDERS:
            return initialState;

        case REQUEST_DATA:
            return {
                ...state,
                isFetching: true
            };

        case RECEIVE_DATA:
            return {
                ...state,
                isFetching: false,
                data: action.data.data
            };

        case REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                showError: true
            };

        default:
            return state;
    }
};

export default reminders;