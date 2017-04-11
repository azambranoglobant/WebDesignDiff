var LinkMapCapturer = require('./src/LinkMapCapturer/LinkMapCapturer');

var App = (function () {
    var browserProvider = {
        _broswerRef: undefined,
        outputFolder: 'output',
        getBrowser: function () {

            if (browserProvider._broswerRef !== undefined) {
                return browserProvider;
            }

            var casper = require('casper').create();
            // var casper = require('casper').create({
            //     verbose: true,
            //     logLevel: 'debug'
            // });

            // casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465 Twitter for iPhone');
            // casper.viewport(480, 320);

            casper.start('about:blank');

            return casper;
        }
    };

    var linkMap = {
        id: 'post1hash1',
        link: '/posts/post1',
        original: 'https://google.com/',
        redesign: 'https://amazon.com/'
    };

    var capturer = new LinkMapCapturer(browserProvider);
    capturer.captureScreenshots(linkMap, function (screenshots) {
        console.log('All done');
    });

})();