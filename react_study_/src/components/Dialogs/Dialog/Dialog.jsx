import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <img src={props.img} alt=""/>
            <NavLink
                to={path}
                className={({isActive}) =>
                    (isActive ? s.active : 'inactive') + ' ' + s.dialog_name}>{props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;