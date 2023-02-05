import View from './View';


class Users extends View {
    constructor() {
        super();
        this._userContainer = document.querySelector('.user__container')
    }

    getStorageUsers() {
        let usersData = this._logic.getStorageUsers();
        console.log(usersData);
        for (let i = 0; i < usersData.length; i++) {
            this._render(usersData[i]);
        }
    }

    _render(userData) {
        this._userContainer.insertAdjacentHTML(
            'afterbegin',
            `<div class="user__item">
                        <a href="../pages/profile.html" class="button users__button users__image_wrapper">
                            <img src='${userData.picture.large}' alt="" class="users__image">
                            to profile
                        </a>
                        <p class="profile__name">${userData.name.first} ${userData.name.last} </p>
                        <p class="profile__gender"><span>gender: </span> ${userData.gender}</p>
                        <p class="profile__age"><span>age: </span>${userData.dob.age}</p>
                        <p class="profile__mail"><span>mail: </span>${userData.email}</p>
                        <p class="profile__location"><span>city: </span>${userData.location.city}</p>

                    </div>`
        )
    }
}