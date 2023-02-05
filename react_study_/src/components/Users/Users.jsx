import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArr = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    let pagesEl = pagesArr.map(p => {
        return <span
            key={p}
            onClick={() => props.onPageChanged(p)}
            className={props.currentPage === p ? s.selectedPage : ''}>
                {p}
            </span>
    })

    let usersElements = props.users
        .map(u =>
            <div id={u.id} key={u.id} className={s.user_item}>
                <div className={s.img_wrapper}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={
                            u.photos.small != null
                                ? u.photos.small
                                : 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'
                        }
                             alt="" className={s.user__photo}/>
                    </NavLink>

                    {u.followed

                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => props.unfollow(u.id)}
                                  className={s.follow_btn}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => props.follow(u.id)}
                                  className={s.follow_btn}>Follow</button>
                    }

                </div>
                <div className={s.user_info}>
                    <p className={s.name}>{u.name}</p>
                    <p className={s.status}>{u.status}</p>
                </div>
            </div>
        );

    return (
        <div className={s.users}>
            {pagesEl}
            {usersElements}
        </div>
    )
}

export default Users;
