import React from "react";
import {connect} from "react-redux";
import {authMe} from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mstp = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mstp, {authMe})(HeaderContainer);