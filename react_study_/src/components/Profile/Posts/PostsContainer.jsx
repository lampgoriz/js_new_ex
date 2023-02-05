import React from "react";
import Posts from "./Posts";
import {addPost, updatePostText} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        state: state.profilePage,
    }
}

const PostsContainer = connect(mstp, {addPost, updatePostText})(Posts)


export default PostsContainer;