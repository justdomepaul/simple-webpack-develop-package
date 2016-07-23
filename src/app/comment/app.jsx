import React from 'react';
import {render} from 'react-dom';

class CommentBox extends React.Component {
    render () {
        return (
            <div>
                Hello, {this.props.name}!
            </div>
        )
    }
}

render(
    <CommentBox name="world"/>,
    document.getElementById('content')
);
