import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if(!props.profileInfo){
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            {/*<img*/}
            {/*    src="https://www.androidauthority.com/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg"*/}
            {/*    alt="Profile background image" className={s.profileBg}/>*/}
            <div >
                <img src={props.profileInfo.photos.large} alt=""/>
               <p className={s.name}>{props.profileInfo.fullName}</p>
               <p className={s.aboutMe}>{props.profileInfo.aboutMe}</p>
            </div>

        </div>
    );
}

export default ProfileInfo;