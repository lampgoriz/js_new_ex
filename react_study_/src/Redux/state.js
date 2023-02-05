import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
// const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
//
// export const addPostActionCreator = () => ({type: ADD_POST});
// export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
// export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText});
// export const updateMessageTextActionCreator = (newText) => ({type: UPDATE_MESSAGE_TEXT, newText});

let store = {
    _state: {
        profilePage: {
            newPostText: '',
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
        },
        dialogsPage: {
            newMessageText: '',
            dialogsData: [
                {
                    id: 1,
                    name: 'Andrey',
                    img: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'
                },
                {
                    id: 2,
                    name: 'Masha',
                    img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
                },
            ],
            messagesData: [
                {id: 1, message: 'Mememee'},
                {id: 2, message: 'BUSAbu'},
            ]
        },
        sideBar: [
            {
                name: 'Andrey',
                img: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'
            },
            {
                name: 'Masha',
                img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
            }
        ]
    },

    _callSubscriber() {},

    getState() {
      return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let length = this._state.profilePage.postsData.length;
    //     let newPost = {
    //         id: length + 1,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
    //     }
    //
    //     this._state.profilePage.postsData.push(newPost);
    //     this.updatePostText('')
    //     this._callSubscriber(this._state);
    // },
    //
    // updatePostText(text) {
    //     this._state.profilePage.newPostText = text;
    //     this._callSubscriber(this._state);
    // },
    //
    // addMessage() {
    //     let length = this._state.dialogsPage.messagesData.length;
    //     let newMessage = {
    //         id: length + 1,
    //         message: this._state.dialogsPage.newMessageText,
    //     }
    //
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this.updateMessageText('');
    //     this._callSubscriber(this._state);
    // },
    //
    // updateMessageText(text) {
    //     this._state.dialogsPage.newMessageText = text;
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);


        // if(action.type === ADD_POST){
        //     let length = this._state.profilePage.postsData.length;
        //     let newPost = {
        //         id: length + 1,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //         img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        //     }
        //     this._state.profilePage.postsData.push(newPost);
        //     this.dispatch({type: UPDATE_POST_TEXT, newText: ''});
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === UPDATE_POST_TEXT){
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === ADD_MESSAGE){
        //     let length = this._state.dialogsPage.messagesData.length;
        //     let newMessage = {
        //         id: length + 1,
        //         message: this._state.dialogsPage.newMessageText,
        //     }
        //
        //     this._state.dialogsPage.messagesData.push(newMessage);
        //     this.dispatch({type: UPDATE_MESSAGE_TEXT, newText: ''});
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === UPDATE_MESSAGE_TEXT){
        //     this._state.dialogsPage.newMessageText = action.newText;
        //     this._callSubscriber(this._state)
        // }
    },
}

export default store;