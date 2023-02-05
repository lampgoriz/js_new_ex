function View() {
    this._logic = new Logic();
    this.canvas = document.querySelector('#example');
    this.ctx = this.canvas.getContext('2d');
    this.formInputs = document.querySelectorAll('.form__input');
    this._formButtonSubmit = document.querySelector('.form__button_submit');
    this.formButtonClear = document.querySelector('.form__button_clear');
    this.modalForm = document.querySelector('.from-wrapper');
    this.toggleFormButton = document.querySelector('.toggle__form_button');
}

View.prototype = {
    init: function () {
        this.toggleFormButton.addEventListener("click", () => {this.modalForm.classList.toggle("js-active_form")});

        for (let i = 0; i < this.formInputs.length; i++){
            this._addListener(this.formInputs[i]);
        }
        this._formButtonSubmit.addEventListener('click', () => {
            let isValid = [];
            for(let i = 0; i < this.formInputs.length; i++){
                isValid.push(this._logic.checkValue(this.formInputs[i].value, this.formInputs[i].placeholder[0], this._calcMaxLength(this.formInputs[1].value)));
            }
            if(isValid[0] && isValid[1] && isValid[2]){
                this._startDrawing(
                    parseInt(this.formInputs[0].value), parseInt(this.formInputs[1].value), parseInt(this.formInputs[2].value)
                );
                this.toggleFormButton.click();
            }
            else {
                this._showErrorMessage();
            }
        });
        this.formButtonClear.addEventListener('click', () =>{
            this.ctx.clearRect(0, 0, 700, 700);
            for (let i = 0; i < this.formInputs.length; i++) {
                this.formInputs[i].value = '';
            }
        });
    },

    _startDrawing: function (x, y, length){
        this.canvas.height = 700;
        this.canvas.width = 700;
        this.ctx.beginPath();
        this._logic.calculateApexes(x, y, length);
        this._logic.getApexesCoordinates((triangleApexes) => {
            this._drawTriangle(triangleApexes)});
        this.fillTriangle();
    },

    _drawTriangle: function (triangleApexes) {
        for (let i = 0; i < triangleApexes.length; i++) {
            for (let j = 0; j < triangleApexes[i].length - 1; j++) {
                if (i < 1) {
                    this.ctx.moveTo(triangleApexes[i][j], triangleApexes[i][j + 1]);
                } else {
                    this.ctx.lineTo(triangleApexes[i][j], triangleApexes[i][j + 1]);
                }
            }
        }
        this.ctx.closePath();
        this.ctx.stroke();
    },

    fillTriangle: function () {
        let firstPoints = this._drawFirstPoint();
        this._drawOtherPoints(firstPoints[0],firstPoints[1]);
        for(let i = 0; i < 30000; i++){
            this._drawOtherPoints();
        }
    },

    _drawFirstPoint: function (){
        let xStatCoordinate = this._logic.getRandomNumber(250,50);
        let yStatCoordinate;
        if(xStatCoordinate > 150){
            // yStatCoordinate = this._logic.getRandomNumber(299, (1.74 * xStatCoordinate - 135));
            yStatCoordinate = this._logic.getRandomNumber(299,
                this._logic.getMinYCoordinateByEquationWithSlope(xStatCoordinate, 1));
        }else {
            // yStatCoordinate = this._logic.getRandomNumber(299, (-1.74 * xStatCoordinate + 387));
            yStatCoordinate = this._logic.getRandomNumber(299,
                this._logic.getMinYCoordinateByEquationWithSlope(xStatCoordinate, 0));
        }
        this._drawCircle(xStatCoordinate, yStatCoordinate);
        return [xStatCoordinate, yStatCoordinate]
    },

    _drawOtherPoints: function (x, y){
        this._logic.calculateNewPoint((x, y)=>{this._drawCircle(x, y)}, x, y);
    },

    _drawCircle: function (x, y) {
        let circle = new Path2D();
        circle.arc(x, y, 1, 0, 365, false);
        this.ctx.fill(circle);
    },

    _addListener: function (element) {
        let that = this;
        element.addEventListener('input', () => {
            let state = that._logic.checkValue(element.value, element.placeholder[0]);
            this._logic.sendInputState(element.placeholder[0], state,
                (isItTrue) => {that._toggleLengthInputDisabled(isItTrue)});
        });
    },

    _toggleLengthInputDisabled: function (axisesValid) {
        this.formInputs[2].disabled = !axisesValid;
        if(axisesValid){
            this._showLengthMessage(this.formInputs[2], axisesValid);
        }else {
            this._showLengthMessage(this.formInputs[2], axisesValid);
        }
    },

    _showLengthMessage: function (element, show) {

            element.placeholder = show ?
                `Length (100 - ${this._calcMaxLength(this.formInputs[1].value)})` :
                'Length';
    },

    _calcMaxLength: function (yCoordinate) {
        return yCoordinate * 1.15;
    },

    _showErrorMessage: function () {
        let error = document.querySelector('.form__message_submit');
        error.classList.toggle('error-active');
        setTimeout(this._showErrorMessage, 3000);
    }
}