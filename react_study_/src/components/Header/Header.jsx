import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                alt="Logo"/>
                <div>
                    {props.isAuth
                        ? props.login
                        : <a href="">login</a>}

                </div>
        </header>
    );
}

export default Header;