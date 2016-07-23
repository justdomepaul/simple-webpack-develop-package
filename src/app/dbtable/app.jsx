var React = require('react');
var ReactDOM = require('react-dom');

const CommentBox = React.createClass({
    render: function() {
        return (
            <div>
                Hello, {this.props.name}!
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox name="world" />,
    document.getElementById('content')
);
