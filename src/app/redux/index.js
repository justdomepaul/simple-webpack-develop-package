import { createStore } from "redux";
import todoApp from "./reducers";

const store = createStore(todoApp, window.STATE_FROM_SERVER);
console.log("Original store:")
console.log(store);

import { addTodo, editTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions";
console.log("Normal store:");
console.log(store.getState());

console.log("Process store:");
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(editTodo(1, "Edit about reducers"));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(2));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

unsubscribe();
