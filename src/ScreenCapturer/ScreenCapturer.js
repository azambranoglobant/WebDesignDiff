function ScreenCapturer(browserProvider) {
    // TODO: Implement this functionality.

    this.takeScreenshot = function(url, outputFileName, cb){
        var browser = browserProvider.getBrowser();
        var filePath = [browserProvider.outputFolder, outputFileName].join('/');
        
        browser.start(url, function() {
            browser.capture(filePath);
        });

        browser.then(function(){
            cb(filePath);
        });

        browser.run();
    };
}

module.exports = ScreenCapturer;