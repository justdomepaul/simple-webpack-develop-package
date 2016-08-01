import React, { Component, PropTypes } from "react";
// import { render } from "react-dom";
import { connect } from "react-redux";
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from "../app/redux/actions.js";

import AddTodo from "../component/redux/AddTodo";
import TodoList from "../component/redux/TodoList";
import Footer from "../component/redux/Footer";

export default class App extends Component {
    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        console.log("App component")
        console.log(visibleTodos)
        console.log(visibilityFilter)
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                }/>
                <TodoList
                    todos={this.props.visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter="SHOW_ALL"
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        "SHOW_ALL",
        "SHOW_COMPLETED",
        "SHOW_ACTIVE"
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(App);

// let rooElement = document.getElementById('root');
// render(
//     <App />,
//     rooElement
// )
