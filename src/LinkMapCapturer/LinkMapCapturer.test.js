var LinkMapCapturer = require('./LinkMapCapturer');
var expect = require('chai').expect;

var mockedBrowserProvider = {
    outputFolder: 'output',
    getBrowser: function () {
        return {
            start: function (url, callback) {
                // TODO: Dummy function.
            },
            thenOpen: function (url, callback) {
                callback();
            },
            run: function (callback) {
                // TODO: Dummy function.
                callback();
            },
            capture: function (filePath) {
                // TODO: Dummy function.
            },
            close: function(){
                
            }
        };
    }
};

describe('LinkMapCapturer', function () {
    describe('#captureScreenshot()', function () {
        it('saves the URL screenshot into the output folder', function () {
            var targetUrl = 'http://google.com';
            var ouputFileName = 'google.png';

            var capturer = new LinkMapCapturer(mockedBrowserProvider);
            capturer.captureScreenshot(targetUrl, ouputFileName, function (path) {
                expect(path).to.have.length.of.at.least(1);
                expect(path).to.have.string(ouputFileName);
            });
        });
    });

    describe('#captureScreenshots()', function () {
        it('correctly generates captures with their respective file paths', function () {
            var linkMap = {
                id: 'post1hash1',
                link: '/posts/post1',
                original: 'http://original.com/posts/post1',
                redesign: 'http://redesign.com/posts/post1'
            };

            var expected = {
                originalScreenshot: mockedBrowserProvider.outputFolder + '/post1hash1_original.png',
                redesignScreenshot: mockedBrowserProvider.outputFolder + '/post1hash1_redesign.png'
            };

            var capturer = new LinkMapCapturer(mockedBrowserProvider);
            capturer.captureScreenshots(linkMap, function (screenshots) {
                expect(screenshots).to.have.all.keys('originalScreenshot', 'redesignScreenshot');
                expect(screenshots).to.deep.equal(expected);
            });

            var linkMap2 = {
                id: 'post2hash2',
                link: '/posts/post2',
                original: 'http://original.com/posts/post2',
                redesign: 'http://redesign.com/posts/post2'
            };

            var expected2 = {
                originalScreenshot: mockedBrowserProvider.outputFolder + '/post2hash2_original.png',
                redesignScreenshot: mockedBrowserProvider.outputFolder + '/post2hash2_redesign.png'
            };

            capturer.captureScreenshots(linkMap2, function (screenshots) {
                expect(screenshots).to.have.all.keys('originalScreenshot', 'redesignScreenshot');
                expect(screenshots).to.deep.equal(expected2);
            });
        });
    });
});