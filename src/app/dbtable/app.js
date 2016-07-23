var ReactDOM = require('react-dom');

const CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", null, 
                "Hello, ", this.props.name, "!"
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, {name: "world"}),
    document.getElementById('content')
);