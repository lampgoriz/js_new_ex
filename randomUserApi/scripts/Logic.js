class Logic {
    constructor() {
        this._data = new Data();
    }

    getUserData(uuid) {
        return this._data.getUserData(uuid);
    }

    addUserToStorage(uuid) {
        this._data.addUserToStorage(uuid);
    }

    getStorageUsers() {
        return this._data.getStorageUsers();
    }
}