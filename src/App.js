import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";
import "./App.css"

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={"/users"}>Users</Link>
                </div>
                <div>
                    <Link to={"/posts"}>Posts</Link>
                </div>
                <div>
                    <Link to={"/comments"}>Comments</Link>
                </div>

                <div className={"app-route"}>
                    <Switch>
                        <Route path={"/users"} render={(props)=>{
                            return <AllUsers/>
                        }}/>
                        <Route path={"/posts"} render={(props)=>{
                            return <AllPosts/>
                        }}/>
                        <Route path={"/comments"} render={(props)=>{
                            return <AllComments/>
                        }}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
  }
}

export default App;
