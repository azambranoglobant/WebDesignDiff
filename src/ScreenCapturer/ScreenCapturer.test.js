var expect = require('chai').expect;

describe('My first test', function(){
    it('Should sum', function(){
        var sum = 2 + 3;
        expect(sum).to.equal(5);
    });

    it('Should substract', function(){
        var substract = 4 - 1;
        expect(substract).to.equal(3);
    });
});