# Count words in a string of text

The following challenge was given to me...

> Write a function that, given a string of text (possibly with punctuation and
line-breaks), returns an array of the top-3 most occurring words, in descending
order of the number of occurrences.

Assumptions: A word is a string of letters (A to Z) optionally containing one or
more apostrophes (’) in ASCII. (No need to handle fancy punctuation.) Matches
should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily. If a text contains fewer than three unique words,
then either the top-2 or top-1 words should be returned, or an empty array if a
text contains no words.

## Approach

The approach I took is as follows:

1. Remove special characters from the string.
1. Create an array that contains each word.
1. Iterate through the array and write an entry into the "wordMap" (Map) object that has the word as the key, and occurrence count as the value.
1. The result so far is a Map that contains ``` [ 'word1': 6, 'word2': 9...] ```
1. Sort the map using a custom sort comparator.  The result is now a map sorted in descending order by occurence count.
1. Get a new array by count with values of each word that has that count.  ex: ``` [12, [word1,word2,word3]] ```
1. Now, get the results where if there are > 1 word for a count, return the value for this count via a random selection.
1. Get the final array taking int account the array length.  (Only the top 3 should be returned, or top 2, or top 1, or empty as applicable.)

## Installation (Note: Requires Node);
1. Clone this repo ```git clone https://github.com/jamesskyoung/wordcounter.git```
1. ``` npm install ```

## Running
```bash
npm start
```

## Testing
```
npm test
```

## Handling long input
The instructions ask to consider long input.  This is handled via using a command line argument that should contain a filename to be used instead of static text within the examples.

Use this ```README.md``` as input.  

```bash
npm start README.js
```