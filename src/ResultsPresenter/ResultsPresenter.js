var Table = require('tty-table');

function ResultsPresenter() {

    var rows = [];

    var header = [{
            value: 'misMatchPercentage'
        },
        {
            value: 'analysisTime',
            formatter: function (value) {
                return value + 'ms';
            }
        },
        {
            value: 'isSameDimensions'
        }
    ];

    var footer = {};

    var options = {
        borderStyle: 1,
        borderColor: "blue",
        paddingBottom: 0,
        headerAlign: "center",
        align: "center",
        color: "white"
    };

    this.accumulate = function (data) {
        rows.push({
            misMatchPercentage: data.misMatchPercentage,
            analysisTime: data.analysisTime,
            isSameDimensions: data.isSameDimensions
        });
    }

    this.show = function () {

        var resultsTable = Table(header, rows, footer, options);
        return resultsTable.render();
    }
}

module.exports = ResultsPresenter;