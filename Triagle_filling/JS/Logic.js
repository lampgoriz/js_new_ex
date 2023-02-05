function Logic() {
    this._data = new Data();
    // this._triangleApexes = [
    //     [50,300],
    //     [250,300],
    //     [150,126.79491924311226],
    //    ];
    this._triangleApexes = [
        [],
        [],
        []
    ];
    this._tempApex = [];
}


Logic.prototype = {
    getApexesCoordinates: function (drawTriangleCallback) {
        drawTriangleCallback(this._triangleApexes);
    },

    calculateNewPoint: function (drawCallback, x1 = this._tempApex[0], y1 = this._tempApex[1]) {
        let apex = this._getRandomApex();
        this._tempApex[0] = (x1 + apex[0]) / 2;
        this._tempApex[1] = (y1 + apex[1]) / 2;
        drawCallback(this._tempApex[0], this._tempApex[1]);
    },

    calculateApexes: function (firstApexX, firstApexY, length){
        this._pushToApexes(0, firstApexX);
        this._pushToApexes(0, firstApexY);
        this._pushToApexes(1, this._triangleApexes[0][0] + length);
        this._pushToApexes(1, firstApexY);
        this._pushToApexes(2, (this._triangleApexes[1][0] + this._triangleApexes[0][0]) / 2 );

        let radiusBig = length / 3**(1/2);
        let radiusSmall = radiusBig / 2;
        let topApex = this._triangleApexes[0][1] - radiusSmall - radiusBig;
        this._pushToApexes(2, topApex);
    },

    _pushToApexes: function (arrIndex, apexCoordinate) {
        this._triangleApexes[arrIndex].push(apexCoordinate);
    },

    getRandomNumber: function (max,min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    _getRandomApex: function () {
        return this._triangleApexes[this.getRandomNumber(2,0)];
    },

    getMinYCoordinateByEquationWithSlope: function (x, indexA) {
        let xA = this._triangleApexes[indexA][0];
        let yA = this._triangleApexes[indexA][1];
        let xB = this._triangleApexes[2][0];
        let yB = this._triangleApexes[2][1];

        let xC = xA - xB;
        let yC = yA - yB;

        return ((-x * yC) / (-xC)) + ((xA * yC) / (-xC)) - ((xC * yA) / (-xC));
    },

    checkValue: function (value, axis, maxL) {
        let parsValue = parseInt(value);
        if(axis == 'X'){
            return parsValue <= 600;
        }
        if(axis == 'Y'){
            return parsValue <= 700 && parsValue >= 100;
        }
        if(axis == 'L'){
            return parsValue <= maxL && parsValue >= 100;
        }
    },

    sendInputState:function (axis, state, callback) {
        this._data.setInputsState(state, axis.toLowerCase());
        let lengthInputState = this._data.getInputsState();
        callback (lengthInputState);
    },
}