var ScreenCapturer = require('./ScreenCapturer');
var expect = require('chai').expect;

var mockedBrowserProvider = {
    getBrowser: function() {
        return {
            start: function(){
                // TODO: does nothing.
            },
            then: function(){
                // TODO: does nothing.
            },
            run: function(){
                // TODO: does nothing.
            }
        };
    }
};

describe('ScreenCapturer', function() {
    it('can be required', function(){
        expect(ScreenCapturer).to.exist;
        expect(ScreenCapturer).to.be.instanceOf(Function);
    });

    it('can be instantiated', function() {
        var instance = new ScreenCapturer();

        expect(instance).to.exist;
        expect(instance).to.be.instanceOf(ScreenCapturer);
    });

    it('produces screenshot from URL', function(){
        var screenCapturer = new ScreenCapturer(mockedBrowserProvider);
        screenCapturer.takeScreenshot('https://google.com', 'google.png');
    });
});