import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

const mstp = (state) => {
    return {
        state: state.sidebarPage,
    }
}

const mdtp = (dispatch) => {
    return{

    }
}

const NavbarContainer = connect(mstp, mdtp)(Navbar);

export default NavbarContainer;