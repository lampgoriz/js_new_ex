class Data {
    constructor() {
        this.requestLink = 'https://randomuser.me/api/';
        this.usersId = [
            '4c2d209c-f127-4a2d-a63b-d4543ea955e5',
            '5532bd09-1a30-492d-b69b-91ec8133c5ac',
            '74ae77df-7ad4-4ef0-869f-202e51bf2652'
        ]
    }

    getUserData(uuid) {
        return axios.get(`${this.requestLink}?uuid=${uuid}`)
            .then((response) => {
                return response.data.results['0'];
            });
    }

    addUserToStorage(uuid) {
        localStorage.setItem(localStorage.length + 1, uuid);
    }

    getStorageUsers() {
        let usersArr = [];
        for (let i = 0; i < localStorage.length; i++) {
            let uuid = localStorage.getItem(i + 1);

            let userData = this.getUserData(uuid);


            usersArr.push(userData);
            console.log(usersArr);

            // usersArr.push(this.getUserData(localStorage.getItem(i + 1)));
        }
        console.log(usersArr);
        return usersArr;

    }

}
