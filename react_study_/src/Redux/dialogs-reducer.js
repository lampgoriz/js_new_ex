const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (newText) =>
    ({type: UPDATE_MESSAGE_TEXT, newText});

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let length = state.messagesData.length;
            let newMessage = {
                id: length + 1,
                message: state.newMessageText,
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}


export default dialogsReducer;