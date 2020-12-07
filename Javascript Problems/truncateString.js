// Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

// Examples
// ('codewars', 9)  ==>  'codewars'
// ('codewars', 7)  ==>  'code...'
// ('codewars', 2)  ==>  'co...'

function truncateString(str, num) {
  let strLength = str.length;

    if (strLength > num && num > 3) {
      str = str.slice(0, num-3).concat("...");
    } else if (strLength > num && num < strLength) {
      str = str.slice(0, num).concat("...");
    }

  return str;
}

console.log(truncateString("chingel",8),"chingel");
console.log(truncateString("chingel",6),"chi...");
console.log(truncateString("chingel",2),"ch...");
console.log(truncateString("pippi",3),"pip...");
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14),"Peter Piper...");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11) , "A-tisket...");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2),"A-tisket a-tasket A green and yellow basket");
console.log(truncateString("A-", 1),"A...");
console.log(truncateString("Absolutely Longer", 2) ,"Ab...");
console.log(truncateString("Chingel loves his Angel so much!!!", "Chingel loves his Angel so much!!!".length-7), "Chingel loves his Angel ...");
console.log(truncateString("I like ice-cream.Do you?", 19),"I like ice-cream...");
console.log(truncateString("Seems like you have passed the final test. Congratulations", 53), "Seems like you have passed the final test. Congrat...");