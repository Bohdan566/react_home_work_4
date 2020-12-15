import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import UserService from "../../services/user-services/UserService";

class FullUser extends Component {

    state = {user: null};

    user_Service = new UserService();

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.user_Service.user(userId);
        this.setState({user});
        console.log(userId)
    }

    render() {
        let {user} = this.state;

        return (
            <div>
                {
                    user && <div>{user.id}____{user.name}____{user.email}</div>
                }
            </div>
        );
    }
}

export default withRouter(FullUser);