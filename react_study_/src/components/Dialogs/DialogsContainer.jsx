import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        state: state.dialogsPage,
    }
}

const mdtp = (dispatch) => {
    return{
        addMessage: () => {
           dispatch(addMessageActionCreator());
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        }

    }
}

const DialogsContainer = connect(mstp, mdtp)(Dialogs)

export default DialogsContainer;