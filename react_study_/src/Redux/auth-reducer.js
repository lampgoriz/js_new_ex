import {AuthAPI} from "../components/API/api";

// action types
const SET_USER_DATA = 'SET_USER_DATA';


// action creators
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
});


// thunk creators
export const authMe = () => (dispatch) => {
    AuthAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}


const initialState = {
    isAuth: false,
    login: null,
    userId: null,
    email: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}


export default authReducer;