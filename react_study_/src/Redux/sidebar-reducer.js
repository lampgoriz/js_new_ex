const initialState = [
    {
        name: 'Andrey',
        img: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'
    },
    {
        name: 'Masha',
        img: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
    }
]

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;