import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post} >
            <img src={props.img} alt=""/>
            <p>{props.message}</p>
            <span>likes: {props.likesCount}</span>
        </div>
    );
}

export default Post;