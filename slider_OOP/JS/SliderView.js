function SliderView(){
    this._slider = document.querySelector('.slider');
    this._prevBtn = document.querySelector('#btn-prev');
    this._nextBtn = document.querySelector('#btn-next');
    this._submitBtn = document.querySelector('.form-submit');
    this._sliderPreviewImagesWrapper = document.querySelector('.slider-preview');
    this._inputForm = document.querySelector('.form-input');
    this._submitMessage = document.querySelector('.submit-message');

    this._logic = new SliderLogic();
}

SliderView.prototype = {
    init: function () {
        let that = this;

        this._submitBtn.addEventListener('click', () => {
            this._logic.pushImageInArr(function (status, add, remove){
                that._showMessageOnFormSubmit(status, add, remove)},
                function (){that._showSliderIndicator()},
                this._inputForm.value, this._prevBtn, this._nextBtn, this._slider,
                this._prevBtnListener, this._nextBtnListener);
            this._inputForm.value = ''
        });

        this._prevBtnListener = this._prevBtn.addEventListener('click', () => {
            that._logic.changeSliderImageIndex(
                "-", function (element){that._showImage(element)},
                this._prevBtn, this._nextBtn, this._slider, this._prevBtnListener)
        });

        this._nextBtnListener = this._nextBtn.addEventListener('click', () => {
            that._logic.changeSliderImageIndex(
                "+", function (element){that._showImage(element)},
                this._prevBtn, this._nextBtn, this._slider, this._nextBtnListener)
        });

        this._showSliderIndicator();
        this._showImage(this._slider);
    },

    _showImage: function (element) {
        element.style.cssText = `
        background: no-repeat url("${this._logic.getImage()}");
        background-size: cover;`;
        // changeIndicator();
    },

    _showMessageOnFormSubmit: function (status, add, remove){
        this._submitMessage.classList.remove('submit-message-inactive');
        this._submitMessage.classList.remove(`submit-message-${remove}`);
        this._submitMessage.classList.add(`submit-message-${add}`);
        this._submitMessage.innerHTML = status == 'ok' ? 'Image has been added' : 'Incorrect value or null';
        setTimeout(() => {
            this._submitMessage.classList.add('submit-message-inactive');
        }, 3000)
    },

    _showSliderIndicator: function () {
        this._sliderPreviewImagesWrapper.insertAdjacentHTML(
            'beforeend',
            `<div class="slider-indicator"></div>`
        );
    }
}









// get HTML elements
// let slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('#btn-prev');
// const nextBtn = document.querySelector('#btn-next');
// const submitBtn = document.querySelector('.form-submit');
// const sliderPreviewImagesWrapper = document.querySelector('.slider-preview');
// let inputForm = document.querySelector('.form-input');
// let submitMessage = document.querySelector('.submit-message');
//
// // variable declaration
// let imagesArr = ['https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg'];
// let imageIndex = 0;
// let prevIndicator, nextIndicator;
//
// // subscribe listeners
// submitBtn.addEventListener('click', () => {
//     pushImageInArr(inputForm.value);
//     inputForm.value = ''});
// prevBtn.addEventListener('click', () => {changeSliderImageIndex("-")});
// nextBtn.addEventListener('click', () => {changeSliderImageIndex("+")});
//
// showSliderIndicator();
// showImage(slider);
// checkBtnActivity();
//
// // function declaration
// function pushImageInArr(link) {
//     if(link == ''){
//         showMessageOnFormSubmit('error', 'error', 'ok');
//     } else {
//         checkPushedImgSrc(link);
//         checkBtnActivity();
//         if(imagesArr.length < 3){
//             showSliderIndicator();
//         }
//         changeIndicator();
//     }
// }
//
// function showImage(element) {
//     element.style.cssText = `
//     background: no-repeat url("${imagesArr[imageIndex]}");
//     background-size: cover;`;
//     changeIndicator();
// }
//
// function changeSliderImageIndex(sign) {
//     if(sign == "+"){
//         if(imageIndex + 1 <= imagesArr.length - 1){
//             imageIndex++;
//             showImage(slider);
//             checkBtnActivity("next",false, false);
//         }else if(imageIndex == imagesArr.length - 1){
//             showImage(slider);
//             checkBtnActivity("next",false, true);
//         }
//     }else if(sign == "-"){
//         if(imageIndex > 0){
//             imageIndex--;
//             showImage(slider);
//             checkBtnActivity("next",false, false);
//         }else if(imageIndex == 0){
//             showImage(slider);
//             checkBtnActivity("next",true, false);
//         }
//     }
// }
//
// function checkBtnActivity(side, prevState, nextState) {
//     if( imagesArr.length <= 1){
//         prevBtn.style.display = "none";
//         nextBtn.style.display = "none";
//     }else {
//         prevBtn.style.display = "inline";
//         nextBtn.style.display = "inline";
//     }
//
//     if(side == 'next'){
//         prevBtn.disabled = prevState
//         nextBtn.disabled = nextState
//     }else if(side == 'prev'){
//         prevBtn.disabled = prevState
//         nextBtn.disabled = nextState
//     }
// }
//
// function showMessageOnFormSubmit(status, add, remove) {
//     submitMessage.classList.remove('submit-message-inactive');
//     submitMessage.classList.remove(`submit-message-${remove}`);
//     submitMessage.classList.add(`submit-message-${add}`);
//     submitMessage.innerHTML = status == 'ok' ? 'Image has been added' : 'Incorrect value or null';
//     setTimeout(()=>{submitMessage.classList.add('submit-message-inactive');},3000)
// }
//
// function checkPushedImgSrc(url) {
//     let img = new Image();
//     img.onerror = img.onabort = function() {
//         showMessageOnFormSubmit('error', 'error', 'ok');
//     };
//     img.onload = function() {
//         imagesArr.push(url);
//         checkBtnActivity();
//         showMessageOnFormSubmit('ok', 'ok', 'error');
//     };
//     img.src = url;
// }
//
// function showSliderIndicator() {
//     sliderPreviewImagesWrapper.insertAdjacentHTML(
//         'beforeend',
//         `<div class="slider-indicator"></div>`
//     );
// }
//
// function changeIndicator() {
//     if((imageIndex > 0 && imageIndex < imagesArr.length - 1) || imageIndex == 1){
//         changeActiveSliderIndicator(1);
//         // changeIndicatorListener(0, 2);
//     }else if(imageIndex == 0){
//         changeActiveSliderIndicator(0);
//         // changeIndicatorListener( -1,1);
//     }else if(imageIndex == imagesArr.length - 1){
//         changeActiveSliderIndicator(2);
//         // changeIndicatorListener( 1,-1);
//     }
// }
//
// function changeActiveSliderIndicator(index) {
//     let indicators = document.querySelectorAll('.slider-indicator');
//     let activeIndicator = document.querySelector('.slider-indicator-active');
//     if (activeIndicator != null) {
//         activeIndicator.classList.remove('slider-indicator-active');
//     }
//     indicators[index].classList.add('slider-indicator-active');
// }




// function changeIndicatorListener(prev, next) {
//     let indicators = document.querySelectorAll('.slider-indicator');
//     for(let i = 0; i < 3; i++){
//         indicators[i].removeEventListener('click', ()=>{changeSliderImageIndex()});
//     }
//     if(indicators[prev] != undefined){
//         prevIndicator = indicators[prev].addEventListener('click', ()=>{changeSliderImageIndex("-")});
//     }
//     if(indicators[next] != undefined){
//         nextIndicator = indicators[next].addEventListener('click', ()=>{changeSliderImageIndex("+")});
//     }
// }


// TO DO
/*Перевірити скільки елементів знаходиться в слайдері
* вивести таку ж кількість елементів в прев'ю, максимум 3 елементи
*
* Встановлювати середньому елементу прев'ю картинку з index, що й на слайдері,
* попередньому index - 1, наступному index + 1.
* */





// База для автослайдера

// function testImage(url, callback, timeout) {
//     timeout = timeout || 5000;
//     var timedOut = false, timer;
//     var img = new Image();
//     img.onerror = img.onabort = function() {
//         if (!timedOut) {
//             clearTimeout(timer);
//             callback(url, "error");
//         }
//     };
//     img.onload = function() {
//         if (!timedOut) {
//             clearTimeout(timer);
//             callback(url, "success");
//         }
//     };
//     img.src = url;
//     timer = setTimeout(function() {
//         timedOut = true;
//         callback(url, "timeout");
//     }, timeout);
// }











