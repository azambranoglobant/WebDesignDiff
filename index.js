var ScreenCapturer = require('./src/ScreenCapturer/ScreenCapturer');

var App = (function(){
    var browserProvider = {
        outputFolder: 'output',
        getBrowser: function() {
            var casper = require('casper').create();

            // casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465 Twitter for iPhone');
            // casper.viewport(480, 320);

            return casper;
        }
    };

    var screenCapturer = new ScreenCapturer(browserProvider);
    screenCapturer.takeScreenshot('http://amazon.com', 'amazon.png');

})();