const fs = require('fs');
const util = require('./topWords');

const displayOutput = (words) => {
  words.forEach((word) => {
    console.log(word);
  });
  console.log('');
}

const getFileContents = fileName => {
  return fs.readFileSync(fileName, 'UTF-8');
};


/**
 * Show example of the function.  For file input, just call it and exit.
 * 
 * Errors will be caught.
 * 
 */
((args) => {
  try {
    if (args.length > 2) { // assume a filename
      const contents = getFileContents(args[2]);
      const resultLong = util.topWords(contents);
      console.log(resultLong);
      process.exit(0);
    }
    const result1 = util.topWords("In the  a village on on of of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound fo coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.");
    const result2 = util.topWords("a a b b b b A A B B B B");
    const result3 = util.topWords(" //won..++((()))@@@t won't won't");

    displayOutput(result1);
    displayOutput(result2);
    displayOutput(result3);
  } catch (err) {
    console.log(err.message);
    process.exit(-1);
  }

})(process.argv);