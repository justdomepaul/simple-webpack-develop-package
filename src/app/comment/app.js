import React from "react";
import {render} from "react-dom";

import CommentList from "../../component/comment/commentlist";
import CommentForm from "../../component/comment/commentform";

class CommentBox extends React.Component {
    render () {
        return (
            <div>
                Hello, {this.props.name}!
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

render(
    <CommentBox name="world"/>,
    document.getElementById("content")
);
