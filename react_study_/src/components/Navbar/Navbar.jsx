import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let friendsElements = props.state.map(f =>
        <div key={f.name}>
            <img src={f.img} alt=""/>
            <p className={s.name}>{f.name}</p>
        </div>
    );

    return (
        <div className={s.nav}>
            <ul>
                <li><NavLink
                    to="/profile"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>Profile
                </NavLink></li>
                <li><NavLink
                    to="/dialogs"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>Message
                </NavLink></li>
                <li><NavLink
                    to="/users"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>Users
                </NavLink></li>
                <li><NavLink
                    to="/news"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>News
                </NavLink></li>
                <li><NavLink
                    to="/music"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>Music
                </NavLink></li>
                <li><NavLink
                    to="/settings"
                    className={({isActive}) =>
                        (isActive ? s.active : 'inactive')}>Settings
                </NavLink></li>
            </ul>
            <div className={s.friends}>
                <p className={s.friends_header}>FRIENDS</p>
                <div className={s.friends_list}>
                    {friendsElements}
                </div>

            </div>
        </div>
    );
}

export default Navbar;