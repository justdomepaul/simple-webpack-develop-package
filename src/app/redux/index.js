import { createStore } from "redux";
import todoApp from "./reducers";

let store = createStore(todoApp, window.STATE_FROM_SERVER);

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "./actions";

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
