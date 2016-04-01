var assert = require('assert');
var findLongestString = require('./index').findLongestString;

describe('findLongestString', function() {
    it('should return undefined when the array is empty', function() {
        var testArray = [];
        assert.equal(undefined, findLongestString(testArray));
    });

    it('should return empty string when empty string is only string in array', function() {
        var testArray = [''];
        assert.equal('', findLongestString(testArray));
    });

    it('should return "a" when a "a" is only string in array', function() {
       var testArray = ['a'];
        assert.equal('a', findLongestString(testArray));
    });

    it('should return "ccc" when the longest string in array occurring at the end', function() {
        var testArray = ['a', 'bb', 'ccc'];
        assert.equal('ccc', findLongestString(testArray));
    });

    it('should return "ccc" when it is longest string in array but appearing at the beginning', function() {
       var testArray = ['ccc', 'bb', 'a'];
        assert.equal('ccc', findLongestString(testArray));
    });
});