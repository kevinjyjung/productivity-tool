import { combineReducers } from 'redux';
import { DUMMY_ACTION } from '../actions';

function dummy(state = {}, action) {
    switch (action.type) {
        case DUMMY_ACTION:
            const { dummy } = action;
            return {
                ...state,
                dummy,
            };
        default:
            return state;
    }
}

export default combineReducers({
    dummy,
});
