import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class User extends Component {
    render() {

    let {match: {url}} = this.props
    let {item} = this.props;
        return (
            <div>
                {item.id}...{item.name}...<Link to={url + "/" + item.id}>Details</Link>
            </div>
        );
    }
}

export default withRouter(User);