import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../../container/App";
import todoApp from "../../app/redux/reducers";

let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());
console.log(store);

let rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
