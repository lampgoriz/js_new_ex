function SliderLogic() {
    this._imagesArr = ['https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg'];
    this._currentImageIndex = 0;
    // this._indicatorsArr = [0];
    this._listeners = {};
}

SliderLogic.prototype = {
    getImage: function () {
        return this._imagesArr[this._currentImageIndex]
    },

    pushImageInArr: function (messageCallback, showSliderIndicatorCallback, link, prevBtn, nextBtn) {
        if (link == '') {
            messageCallback('error', 'error', 'ok');
        } else {
            let that = this;
            let img = new Image();
            img.onerror = img.onabort = function () {
                messageCallback('error', 'error', 'ok');
            };
            img.onload = function () {
                that._checkBtnActivity(prevBtn, nextBtn);
                messageCallback('ok', 'ok', 'error');
            };
            img.src = link;
            this._imagesArr.push(link);
            // this._indicatorsArr.push(this._indicatorsArr.length);
            if (this._imagesArr.length < 4) {
                showSliderIndicatorCallback();
            }
            this._addIndicatorsListeners();
            // changeIndicator();
        }
    },

    changeSliderImageIndex: function (sign, callbackShowImage, prevBtn, nextBtn, element) {
        if (sign == "+") {
            if (this._currentImageIndex + 1 <= this._imagesArr.length - 1) {
                this._currentImageIndex++;
                callbackShowImage(element);
            } else if (this._currentImageIndex == this._imagesArr.length - 1) {
                callbackShowImage(element);
            }
        } else if (sign == "-") {
            if (this._currentImageIndex > 0) {
                this._currentImageIndex--;
                callbackShowImage(element);
            } else if (this._currentImageIndex == 0) {
                callbackShowImage(element);
            }
        }
    },

    _checkBtnActivity: function (prevBtn, nextBtn) {
        if (this._imagesArr.length > 1) {
            prevBtn.style.display = "inline";
            nextBtn.style.display = "inline";
        }
    },

    _addIndicatorsListeners: function () {
        if(this._currentImageIndex == 0 && this._imagesArr.length > 1){
            let indicators = document.querySelectorAll('.slider-indicator');

            this.createClickListener(indicators[1], () => {
                this._logic.changeSliderImageIndex(
                    "+", function (element){that._showImage(element)},
                    this._prevBtn, this._nextBtn, this._slider, this._nextBtnListener)
            });
        }
    },

    createClickListener: function (element, func) {
        element.addEventListener('click', ()=>{func()});
    },


    changeIndicator: function () {
        if ((imageIndex > 0 && imageIndex < imagesArr.length - 1) || imageIndex == 1) {
            changeActiveSliderIndicator(1);
            // changeIndicatorListener(0, 2);
        } else if (imageIndex == 0) {
            changeActiveSliderIndicator(0);
            // changeIndicatorListener( -1,1);
        } else if (imageIndex == imagesArr.length - 1) {
            changeActiveSliderIndicator(2);
            // changeIndicatorListener( 1,-1);
        }
    },

    changeActiveSliderIndicator: function (index) {
        let indicators = document.querySelectorAll('.slider-indicator');
        let activeIndicator = document.querySelector('.slider-indicator-active');
        if (activeIndicator != null) {
            activeIndicator.classList.remove('slider-indicator-active');
        }
        indicators[index].classList.add('slider-indicator-active');
    },
}