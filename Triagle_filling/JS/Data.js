function Data() {
    this._xInputState = false;
    this._yInputState = false;
    this._lengthInputState = false;
}

Data.prototype = {
    getInputsState: function () {
        return this._xInputState && this._yInputState;
    },

    setInputsState: function (state, axis) {
        this[`_${axis}InputState`] = state;
    },
}