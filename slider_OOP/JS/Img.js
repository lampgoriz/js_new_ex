function Img() {
    this._url;
    this._number;
    this._isDisplayed = false;
}

Img.prototype = {
    changeIndicatorDisplay: function() {
        this._isDisplayed = true;
    },
}