"use strict";

describe("Slider", function () {

    it ("should be true", function () {
        expect(true).toBeTruthy();
    });

    it ("should be defined", function () {
        var slider = new Slider();

        expect(slider).not.toBeUndefined();
    });

    var mySlider;

    beforeEach(function () {
        mySlider = new Slider();
    });

    it ("should have predefined options", function () {
        expect(mySlider.hasOwnProperty("currentSlide")).toBeTruthy();
        expect(mySlider.currentSlide).toBe(0);
    });

    it ("should have ability to change options", function () {
        var myOptions = {
            totalSlides: 3,
            currentSlide: 1,
            autoloop: false
        };

        mySlider.setOptions(myOptions);

        expect(mySlider.totalSlides).toBe(3);
    });

    it("should ignore unnecessary options", function () {
        var myOptions = {
            currentSlide: 1,
            test: "Test"
        };

        mySlider.setOptions(myOptions);

        expect(mySlider.hasOwnProperty("test")).toBeFalsy();
    });

    describe("slide functions", function () {

        beforeEach(function () {
            mySlider.setOptions({
                totalSlides: 5,
                currentSlide: 0,
                autoloop: true
            });
        });


        it ("should slide to the next picture", function () {
            mySlider.nextSlide();

            expect(mySlider.currentSlide).toBe(1);
        });

        it ("should slide to the previous picture", function () {
            mySlider.setOptions({currentSlide: 5});
            mySlider.prevSlide();

            expect(mySlider.currentSlide).toBe(4);
        });

        it ("should start from the first slide", function () {
            mySlider.setOptions({currentSlide: 5});

            mySlider.nextSlide();

            expect(mySlider.currentSlide).toBe(0);
        });

        it ("should start from the last slide", function () {
            mySlider.setOptions({currentSlide: 0});

            mySlider.prevSlide();

            expect(mySlider.currentSlide).toBe(5);
        });

        it ("should change slides automatically", function (done) {
            mySlider.start();

            setTimeout(function () {
                expect(mySlider.currentSlide).toBe(2);
                done();
            }, 2500)
        })
    });
});