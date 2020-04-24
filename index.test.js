const util = require('./topWords');

describe('Test word counter', () => {

  describe('Validate scenarios...', () => {
    it('should return an array of length equals 3', () => {
      const results = util.topWords('word1 word1 word1 word1 word2 word2 word2 word2 word2 word2 word3 word3 word3 word3 word3 word3 word3 word3 ');
      expect(results.length).toEqual(3);
    });
    it('most used word must be word3', () => {
      const results = util.topWords('word1 word1 word1 word1 word2 word2 word2 word2 word2 word2 word3 word3 word3 word3 word3 word3 word3 word3 ');
      expect(results[0]).toEqual('word3');
    });
    it('most used word must be word3', () => {
      const results = util.topWords('word1 word1 word1 word1 word2 word2 word2 word2 word2 word2 word3 word3 word3 word3 word3 word3 word3 word3 ');
      expect(results[0]).toEqual('word3');
    });
    it('must handle null', () => {
      const results = util.topWords(null);
      expect(results.length).toEqual(0);
    });
    it('must handle undefined', () => {
      const results = util.topWords();
      expect(results.length).toEqual(0);
    });
    it('same as example given?', () => {
      const results = util.topWords("         //wont won't won't");
      expect(results).toEqual( ["won't", "wont"]);
    });
    it('must be mixed case', () => {
      const results = util.topWords(" a a a a A A A A");
      expect(results[0]).toEqual('a');
    });
  });
});
