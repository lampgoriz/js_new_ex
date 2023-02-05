class View {
    constructor() {
        this._logic = new Logic();
    }

    _showImages() {
        let imagesArr = this._logic.getImages();

    }
}