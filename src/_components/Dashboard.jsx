import React from 'react';
import Home from './Home';
import { Redirect } from 'react-router';
import LoginPage from './LoginPage';
import { connect } from 'react-redux';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        if (this.props.loggingIn) {
           return( <Home />)
        }
        else {
            return (<LoginPage />)
        }

    }
}
function mapStateToProps(state) {
   return {
    loggingIn: state.authentication.loggingIn
}
}
export default connect(mapStateToProps)(Dashboard)