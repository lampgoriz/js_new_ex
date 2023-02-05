import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setCurrentProfileId} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId =  this.props.router.params.userId ? this.props.router.params.userId : this.props.meId;
        this.props.getProfile(userId);
    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}/>
    }
}

let mstp = (state) => {
    return{
        profileInfo: state.profilePage.profileInfo,
        currentProfileId: state.profilePage.currentProfileId,
        meId: state.auth.userId
    }
}

export default connect(mstp,
    {setCurrentProfileId, getProfile})(withRouter(ProfileContainer));