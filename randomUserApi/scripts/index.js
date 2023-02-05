// let profileEl = document.querySelector('.profile__container');
// let usersEl = document.querySelector('.user__container');
//
// if(profileEl){
//     profileEl.onload = () => {
//         let profile = new Profile();
//         profile.getUserData();
//     }
// }else if(usersEl) {
//     usersEl.onload = () => {
//         let user = new Users();
//         user.getStorageUsers();
//
//     }
// }


let profile = new Profile();
profile.getUserData();

let user = new Users();
user.getStorageUsers();

let view = new View();

