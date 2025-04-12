// 1. Create variables and combine them into a sentence
let fullName = "Olumide D. Fakorede";
let newAge = 25;
let userNationality = "Nigerian";
let userIntroduction = `Hello, my name is ${fullName}. I am ${newAge} years old and I am ${userNationality}.`;
console.log(userIntroduction);

// 2. Favorite quote or lyric in uppercase and lowercase
let quote = "The only limit to our realization of tomorrow is our doubts of today.";
console.log(quote.toUpperCase());
console.log(quote.toLowerCase());

// 3. Reverse a word
let wordBefore = "JavaScript";
let wordAfter = word.split("").reverse().join("");
console.log(wordAfter);

// 4. Store the price of 3 items and calculate the total
let itemOne = 50;
let itemTwo = 30;
let itemThree = 20;
let finalPrice = itemOne + itemTwo + itemThree;
console.log(`The total price of the items is $${finalPrice}.`);

// 5. Find the average of 5 test scores
let scoreOne = 80;
let scoreTwo = 75;
let scoreThree = 90;
let scoreFour = 85;
let scoreFive = 95;
let avgScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive) / 5;
console.log(`The average score is ${avgScore}.`);

// 6. Create an array of favorite foods and display the first and last items
let foods = ["Jollof Rice", "Pizza", "Pasta", "Suya", "Fried Chicken"];
console.log(`First food: ${foods[0]}`);
console.log(`Last food: ${foods[foods.length - 1]}`);

// 7. Add two more food items: one at the beginning and one at the end
foods.unshift("Pounded Yam");
foods.push("Ice Cream");
console.log("Updated list of favorite foods:", foods);

// 8-10. Create three arrays with 10 student names each
let jssOne = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ian", "Jack"];
let jssTwo = ["Kate", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tom"];
let jssThree = ["Uma", "Victor", "Will", "Xander", "Yasmine", "Zane", "Abigail", "Benjamin", "Chloe", "Daniel"];

console.log("JSS One Students:", jssOne);
console.log("JSS Two Students:", jssTwo);
console.log("JSS Three Students:", jssThree);