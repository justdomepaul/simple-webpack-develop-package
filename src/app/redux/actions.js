/**
  * action type
  */

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/**
  * other const
  */
export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

/**
  * action constuctor
  */

export function addTodo(text) {
    console.log("action addTodo:");
    return {
        type: ADD_TODO,
        text
    };
}

export function editTodo(index, text) {
    console.log("editTodo:");
    return {
        type: EDIT_TODO,
        index,
        text
    };
}
export function toggleTodo(index) {
    console.log("action toggleTodo:");
    return {
        type: TOGGLE_TODO,
        index
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}
