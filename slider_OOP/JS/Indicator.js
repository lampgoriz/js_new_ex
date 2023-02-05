function Indicator() {
    this._state = false;
    this._number;
    this._isDisplayed = false;
}

Indicator.prototype = {
    changeIndicatorState: function () {
        this._state = true;
    },

    changeIndicatorDisplay: function (){
        this._isDisplayed = true;
    },


}
