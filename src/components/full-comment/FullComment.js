import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import CommentService from "../../services/comment-services/CommentService";

class FullComment extends Component {
    state = {comment: null};

    comment_Service = new CommentService();

    async componentDidMount() {
        let {commentId} = this.props;
        let comment = await this.comment_Service.comment(commentId);
        this.setState({comment})
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {
                    comment && <div>{comment.id}...{comment.name}...{comment.email}</div>
                }
            </div>
        );
    }
}

export default withRouter(FullComment);