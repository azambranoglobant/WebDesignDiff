var CaptureAnalyzer = require('./CaptureAnalyzer');
var expect = require('chai').expect;

var mockedImageAnalyzer = {
    getAnalyzer: function () {
        return {
            run: function (image1, image2) {
                return {
                    misMatchPercentage: 100,
                    analysisTime: 100,
                    isSameDimensions: false
                };
            }
        }
    }
};

describe('CaptureAnalyzer', function () {
    describe('#analyzeScreenCaptures()', function () {
        it('analyzes a pair of screen captures', function () {

            var screenCaptures = {
                originalScreenshot: 'output/image1.png',
                redesignScreenshot: 'output/image2.png'
            };

            var expectedResult = {
                misMatchPercentage: 100,
                analysisTime: 100,
                isSameDimensions: false
            };

            var analyzer = new CaptureAnalyzer(mockedImageAnalyzer);
            analyzer.analyzeScreenCaptures(screenCaptures, function (analysisResult) {
                expect(analysisResult).to.deep.equal(expectedResult);
            });
        });
    });
});