function CaptureAnalyzer(imageAnalyzerProvider) {
    this.analyzeScreenCaptures = function (screenCaptures, callback) {

        var analyzer = imageAnalyzerProvider.getAnalyzer();

        analyzer.run(screenCaptures.originalScreenshot, screenCaptures.redesignScreenshot, function (data) {
            callback({
                misMatchPercentage: data.misMatchPercentage,
                analysisTime: data.analysisTime,
                isSameDimensions: data.isSameDimensions
            });
        });
    }
}

module.exports = CaptureAnalyzer;