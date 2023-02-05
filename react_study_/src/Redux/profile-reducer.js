
// action types
import {ProfileAPI} from "../components/API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_CURRENT_PROFILE_ID = 'SET_CURRENT_PROFILE_ID';


// action creators
export const addPost = () => ({type: ADD_POST});
export const updatePostText = (newText) =>
    ({type: UPDATE_POST_TEXT, newText});
export const setProfileInfo = (profileInfo) =>({type: SET_PROFILE_INFO, profileInfo});
export const setCurrentProfileId= (currentProfileId) =>({type: SET_CURRENT_PROFILE_ID, currentProfileId});


// thunk creators
export const getProfile = (userId) => {

    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(data => {
            dispatch(setProfileInfo(data));
        });
    }
}

let initialState = {
    newPostText: '',
    profileInfo: null,
    currentProfileId:2,
    postsData: [
        {
            id: 10,
            message: 'Mememee',
            likesCount: 12,
            img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        },
        {
            id: 20,
            message: 'BUSAbu',
            likesCount: 2,
            img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let length = state.postsData.length;
            let newPost = {
                id: length + 1,
                message: state.newPostText,
                likesCount: 0,
                img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_CURRENT_PROFILE_ID:
            return {
                ...state,
                currentProfileId: action.currentProfileId
            }
        default:
            return state;
    }
}


export default profileReducer;