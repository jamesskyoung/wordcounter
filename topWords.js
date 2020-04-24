/*****************************************************************************************
 * 
 * Write a function that, given a string of text (possibly with punctuation and
 * line-breaks), returns an array of the top-3 most occurring words, in descending
 * order of the number of occurrences.
 * 
 * Assumptions: A word is a string of letters (A to Z) optionally containing one or
 * more apostrophes (’) in ASCII. (No need to handle fancy punctuation.) Matches
 * should be case-insensitive, and the words in the result should be lowercased.
 * Ties may be broken arbitrarily. 
 * 
 * If a text contains fewer than three unique words,
 * then either the top-2 or top-1 words should be returned, or an empty array if a
 * text contains no words.
 * 
 * USAGE: 
 * 
 * 
 ****************************************************************************************/

/**
 * Comparator used in sorting (Descending)
 * @param {*} obj1 
 * @param {*} obj2 
 */
const comparator = (obj1, obj2) => {
  if (obj1[1] > obj2[1]) return -1;
  if (obj1[1] < obj2[1]) return 1;
  return 0;
}

const getInitialWords = (str) => {
  const cleanString = removeExtraCharacters(str);
  return cleanString.split(/ /);
}

/**
 * Final array needs to be spliced... top 3 .. but handle
 * < 3...
 * 
 * @param {*} words 
 */
const getFinalWordArray = (words) => {
  return words.splice(0, words.length > 3 ? 3 : words.length);
}


/**
 * Get an array by count of the words
 * ex: [12, [word,word,word]] represents 'word' occurs 12 times
 * 
 * @param {*} words 
 * @param {*} iterationCount 
 */
const getTopWordsByCount = (words, iterationCount) => {
  const topWordsByCount = new Map();
  words.forEach((word) => {
    if (topWordsByCount.has(word[1])) {
      const tempArray = topWordsByCount.get(word[1])
      tempArray.push(word[0]);
      topWordsByCount.set(word[1], tempArray);
    } else {
      topWordsByCount.set(word[1], [word[0]]);
    }

  });
  return topWordsByCount;
}

/**
 * Using the word array, get each entry and return a randomised value based on the length
 * of the array.
 * 
 * @param {*} words 
 */
const getTopWordsByName = (words) => {
  const wordsByName = [];
  for (const [key, value] of words.entries()) {
    if (value.length > 1) {
      // randomise choice of word
      wordsByName.push(value[Math.floor(Math.random() * value.length)]);
    } else {
      wordsByName.push(value[0])
    }

  }
  return wordsByName;
}

const getWordMap = (words) => {
  const wordMap = new Map();
  words.forEach(word => {
    if (word.trim().length === 0) {
      return;
    }
    const wordLc = word.toLowerCase();
    if (wordMap.has(wordLc)) {
      let count = wordMap.get(wordLc);
      wordMap.set(wordLc, count += 1);
    } else {
      wordMap.set(wordLc, 1)
    }
  });
  return wordMap;
}

/**
 * Remove characters we're not interested in.
 * 
 * Regex means these characters:
 * . , - / # ! $ £ % & * ; + @ : { } = - _ ` ( )  => Replaced with empty character
 * are replaced with an empty character.
 * 
 * @param {*} str 
 */
const removeExtraCharacters = (str) => {
  let returnString =  str.replace(/[\.,-\/#!$£%\^&\*;+@:{}=\n\-_`~()]/g, "");
  return returnString.replace(/\n/g, " ");
};

/**
 * Module entry point.
 */
module.exports = {
  topWords: (str) => {
    if (!str) { // ensure handling of null, undefined...
      return [];
    }

    const words = getInitialWords(str);
    const wordMap = getWordMap(words);
    const topWords = [...wordMap].sort(comparator);
    const topWordsByCount = getTopWordsByCount(topWords);
    const wordsByName = getTopWordsByName(topWordsByCount);
    const results = getFinalWordArray(wordsByName);

    return results;
  }
}