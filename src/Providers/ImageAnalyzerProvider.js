var resemble = require('node-resemble-js');
var fs = require('fs');

module.exports = {
    getAnalyzer: function () {
        return {
            run: function (originalScreenshot, redesignScreenshot, callback) {
                var file = fs.readFileSync(originalScreenshot);
                var file2 = fs.readFileSync(redesignScreenshot);

                resemble(file)
                        .compareTo(file2)
                        .ignoreColors()
                        .onComplete(callback);
            }
        };
    }
};