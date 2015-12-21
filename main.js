"use strict";

function Slider (options) {

    this.$$interval;
    this.totalSlides = 0;
    this.currentSlide = 0;
    this.autoloop = false;

    this.init(options);

    return this;
}

Slider.prototype.init = function (options) {
    var _opt = options || {};
    this.setOptions(_opt);
};

Slider.prototype.setOptions = function (options) {
    for (var i in options) {
        if (this.hasOwnProperty(i)) {
            this[i] = options[i];
        }
    }
};

Slider.prototype.nextSlide = function () {
    if (this.autoloop) {
        if (this.currentSlide < this.totalSlides) {
            this.currentSlide++;
        }
        else {
            this.currentSlide = 0;
        }
    }
    else {
        while(this.currentSlide < this.totalSlides) {
            this.currentSlide++;
        }
    }
};

Slider.prototype.prevSlide = function () {
    if (this.autoloop) {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        }
        else {
            this.currentSlide = this.totalSlides;
        }
    }
    else {
        while(this.currentSlide >= 0) {
            this.currentSlide--
        }
    }
};

Slider.prototype.start = function () {
    var that = this;
    this.$$interval = setInterval(function () {
        that.nextSlide();
    }, 1000)
}