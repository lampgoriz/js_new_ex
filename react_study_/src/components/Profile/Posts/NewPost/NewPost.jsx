import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let updatePostText = (e) => {
        let text = e.currentTarget.value;
        props.updatePostText(text);
    }


    return (
        <div className={s.newPost}>
            <input
                   type="text"
                   placeholder={'Wright a message...'}
                   onChange={updatePostText}
                   value={props.newPostText}
            />
            <input type="button" value={'Add'} onClick={addPost}/>
        </div>
    );
}

export default NewPost;