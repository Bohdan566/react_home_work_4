import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import PostService from "../../services/post-services/PostService";

class FullPost extends Component {

    state = {post: null};

    post_Service = new PostService();

    async componentDidMount() {
        let {postId} = this.props;
        let post = await this.post_Service.post(postId);
        this.setState({post});
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {
                    post && <div>{post.id}{<br/>}{post.title}{<br/>}{post.body}</div>
                }
            </div>
        );
    }
}

export default withRouter(FullPost);