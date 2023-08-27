/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal.
 * ES6 JS
 */

 
// Destructuring arrays
let ages = [30, 26, 27];
let [mary, john, anna] = ages;
console.log(mary, john, anna);

// Destructuring objects
let  jobs = {
    julia: 'cook',
    viki: 'doctor',
    polly: 'casier'
};

let {julia, viki, polly} = jobs;
console.log(julia, viki, polly);

// Destructuring subsets
let languages = ["russian", "english", "german", "french", "estonian"];
let [kseniaNative, kseniaSecondary] = languages;
console.log(kseniaNative, kseniaSecondary);

//skip first languages with commas
let[, , oliviaNative, oliviaSecondary] = languages;
console.log(oliviaNative, oliviaSecondary);

let languages2 = {
    firstLanguage: "russian",
    secondLanguage: "english",
    thirdLanguage: "german",
    fourthLanguage: "french"
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "wattermelon"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFood = {
  ksenia: "pasta",
  artur: "burger",
  olivia: "pizza",
  mama: "sweets" 
};
let {ksenia, artur, ...rest} = favoriteFood;
console.log(ksenia);
console.log(artur);
console.log(rest);
