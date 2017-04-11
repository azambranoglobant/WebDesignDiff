function LinkMapCapturer(browserProvider) {

    this.captureScreenshots = function (linkMap, callback) {
        var reference = this;

        var originalFileName = linkMap.id + '_original.png';
        var redesignFileName = linkMap.id + '_redesign.png';

        var originalScreenshot;
        var redesignScreenshot;

        reference.captureScreenshot(linkMap.original, originalFileName, function (originalPath) {
            originalScreenshot = originalPath;
            reference.captureScreenshot(linkMap.redesign, redesignFileName, function (redesignPath) {
                redesignScreenshot = redesignPath;
                callback({
                    originalScreenshot: originalScreenshot,
                    redesignScreenshot: redesignScreenshot
                });
                var browser = browserProvider.getBrowser();
                browser.close();
            });
        });
    };

    this.captureScreenshot = function (url, outputFileName, callback) {
        var browser = browserProvider.getBrowser();
        var filePath = [browserProvider.outputFolder, outputFileName].join('/');

        browser.thenOpen(url, function () {
            browser.capture(filePath);
        });

        browser.run(function () {
            callback(filePath);
        });
    };
}

module.exports = LinkMapCapturer;