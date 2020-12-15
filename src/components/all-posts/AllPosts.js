import React, {Component} from 'react';
import PostService from "../../services/post-services/PostService";
import Post from "../post/Post";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import FullPost from "../full-post/FullPost";

class AllPosts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }

                <div className={"div-post"}>
                    <Switch>
                        <Route path={url + "/:id"} render={(props)=>{
                            let {match:{params:{id}}} = props;
                            return <FullPost postId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPosts);