const util = require('./topWords');

const displayOutput = (words) => {
  words.forEach((word) => {
    console.log( word);
  });
}
(() => {
  
  const result1 = util.topWords("In the  a village on on of of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound fo coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.");
  const result2 = util.topWords("a a b b b b word's word's word's word's word's word's word's word's word's word's");
  const result3 = util.topWords(" //won..++((()))@@@t won't won't");
  
  displayOutput(result1);
  displayOutput(result2);
  displayOutput(result3);
  
})();