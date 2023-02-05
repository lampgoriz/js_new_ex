import React from "react";
import s from './Posts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements =
        props.state.postsData.map(p =>
            <Post id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
                  key={p.id}
                  img={p.img}
            />)


    return (
        <div className={s.posts}>
            <NewPost
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                newPostText={props.state.newPostText}
            />
            { postsElements }
        </div>
    );
}

export default Posts;