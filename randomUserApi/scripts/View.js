export default View;

class View {
    constructor() {
        this._logic = new Logic();
    }

    getUserData(uuid) {
        this._logic.getUserData(uuid)
            .then((userData) => {
                this._render(userData);
            });
    }
}

// class Profile extends View {
//     constructor() {
//         super();
//         this.profileContainer = document.querySelector('.profile__container');
//     }
//
//     _render(userData) {
//         this.profileContainer.insertAdjacentHTML(
//             'afterbegin',
//             `<div class="profile__column">
//                         <div class="profile__image_wrapper">
//                             <img src='${userData.picture.large}' alt="" class="profile__image">
//                         </div>
//                         <div class="profile__button_wrapper">
//                             <input type="button" value="add" class="profile__button" data-profileButton = 'addBtn'>
//                             <input type="button" value="skip" class="profile__button" data-profileButton = 'skipBtn'>
//                             <a href="../pages/users.html" class="button profile__link_button">to users</a>
//                         </div>
//                    </div>
//                     <div class="profile__column">
//                         <p class="profile__name">${userData.name.first} ${userData.name.last} </p>
//                         <div class="profile__information">
//                             <p class="profile__gender"><span>gender: </span> ${userData.gender}</p>
//                             <p class="profile__age"><span>age: </span>${userData.dob.age}</p>
//                             <p class="profile__mail"><span>mail: </span>${userData.email}</p>
//                             <p class="profile__phone"><span>phone: </span>${userData.phone}</p>
//                             <p class="profile__location"><span>city: </span>${userData.location.city}</p>
//                             <p class="profile__location"><span>country: </span>${userData.location.country}</p>
//                         </div>
//                     </div>`
//         )
//         this._addButtonsListener(document.querySelector(`[data-profileButton = "addBtn"]`), () => {
//             this._addUserToStorage(userData.login.uuid);
//             this._clearUserInfo();
//             this.getUserData();
//         });
//         this._addButtonsListener(document.querySelector(
//             `[data-profileButton = "skipBtn"]`), () => {
//             this._clearUserInfo();
//             this._skipUser(userData.login.uuid);
//         });
//     }
//
//     _addButtonsListener(button, func) {
//         button.addEventListener('click', func);
//     }
//
//     _addUserToStorage(uuid) {
//         this._logic.addUserToStorage(uuid);
//     }
//
//     _skipUser(uuid) {
//         this.getUserData(uuid);
//     }
//
//     _clearUserInfo() {
//         this.profileContainer.querySelectorAll('.profile__column')
//             .forEach(el => el.remove());
//     }
//
// }

// class Users extends View {
//     constructor() {
//         super();
//         this._userContainer = document.querySelector('.user__container')
//     }
//
//     getStorageUsers() {
//         let usersData = this._logic.getStorageUsers();
//         console.log(usersData);
//         for (let i = 0; i < usersData.length; i++) {
//             this._render(usersData[i]);
//         }
//     }
//
//     _render(userData) {
//         this._userContainer.insertAdjacentHTML(
//             'afterbegin',
//             `<div class="user__item">
//                         <a href="../pages/profile.html" class="button users__button users__image_wrapper">
//                             <img src='${userData.picture.large}' alt="" class="users__image">
//                             to profile
//                         </a>
//                         <p class="profile__name">${userData.name.first} ${userData.name.last} </p>
//                         <p class="profile__gender"><span>gender: </span> ${userData.gender}</p>
//                         <p class="profile__age"><span>age: </span>${userData.dob.age}</p>
//                         <p class="profile__mail"><span>mail: </span>${userData.email}</p>
//                         <p class="profile__location"><span>city: </span>${userData.location.city}</p>
//
//                     </div>`
//         )
//     }
//
// }