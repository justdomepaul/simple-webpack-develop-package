import React, { Component, PropTypes } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
    render() {
        console.log("TODOLIST.js")
        // console.log(this.props.todos)
        // let tmp = this.props.todos[0];
        // console.log(tmp)
        // console.log({...tmp})
        // let {text, completed} = {...tmp};
        // console.log(text);
        // console.log(completed);
        // {...todo} 作為對象賦值的寫法，直接對Todo component 增加todo物件中的key value對為 key=value的props傳入
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
