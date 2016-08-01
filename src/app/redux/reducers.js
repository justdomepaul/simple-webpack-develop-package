import { combineReducers } from "redux";
import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    console.log("visibilityFilter reducer:");
    console.log(state);
    console.log(action);
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    console.log("todos reducer:");
    console.log(state);
    console.log(action);
    switch(action.type) {
        case ADD_TODO:
            console.log("ADD_TODO method type & state:");
            console.log(state);
            let returnVal = [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
            console.log(returnVal);
            return returnVal;
        case EDIT_TODO:
            console.log("EDIT_TODO method type & state:");
            console.log(state);
            return state.map((todo, index) => {
                console.log(todo);
                console.log(index);
                console.log(action)
                if (index === action.index) {
                    let val = Object.assign({}, todo, {
                        text: action.text
                    });
                    console.log("edit todo:");
                    console.log(val);
                    console.log("=======================");
                    return val;
                }
                return todo;
            });
            break;
        case TOGGLE_TODO:
            console.log("TOGGLE_TODO method type & state:");
            console.log(state);
            return state.map((todo, index) => {
                console.log(todo);
                console.log(index);
                if (index === action.index) {
                    let val = Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                    console.log("combine todo:");
                    console.log(val);
                    console.log("---------------------");
                    return val;
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;
