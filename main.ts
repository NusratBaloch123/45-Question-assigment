//1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescripting.org/download) and [Vs Code](https://code.visualstudio.com) on your computer.





// 2.  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string = "Eric";
console.log(` "Hello ${personName}, would you like to learn some Python today?" `)


// 3.  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "John Doe";

// Lowercase
console.log("Lowercase:", personName.toLowerCase());

// Uppercase
console.log("Uppercase:", personName.toUpperCase());

// Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

//5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";
let message: string = `${famous_person} once said, "${quote}"`;

console.log(message);

// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personNameWithWhitespace: string = "\t\n   John Doe \t\n";
console.log("Name with whitespace:", personNameWithWhitespace);

let strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);


//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);

// Multiplication
console.log("Multiplication:", 4 * 2);

// Division
console.log("Division:", 16 / 2);


// 8.You should create four lines that look like this:

 console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber: number = 7;
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);


// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Program: Dinner Guest List
// Author: ChatGPT
// Date: 2024-02-08
// Description: This program manages a dinner guest list. It adds new guests to the list and prints invitation messages for each guest.

// Original guest list
let guests: string[] = ['Alice', 'Bob', 'Charlie'];

// Informing people about the bigger dinner table
console.log("Good news everyone! We've found a bigger dinner table!");

// Add one new guest to the beginning of the list
guests.unshift('David');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Emily');

// Use push() to add one new guest to the end of the list
guests.push('Frank');

// Print invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}

// Program: Fibonacci Sequence
// Author: ChatGPT
// Date: 2024-02-08
// Description: This program generates the Fibonacci sequence up to a specified number of terms and prints the sequence.

// Function to generate Fibonacci sequence
function fibonacci(n: number): number[] {
    let sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
    return sequence;
}

// Generate and print Fibonacci sequence with 10 terms
console.log("Fibonacci sequence:");
console.log(fibonacci(10).join(', '));

 
// 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Array of friends' names
let names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];

// Printing each person's name
for (let name of names) {
    console.log(name);
  }

  
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Array of friends' names
let names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];

// Printing personalized greeting message for each person
for (let name of names) {
    console.log(`Hello, ${name}! Have a wonderful day!`);
}


// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Array of favorite modes of transportation
let transportation: string[] = ['Tesla Model S', 'Yamaha YZF-R6', 'Boeing 787 Dreamliner'];

// Printing statements about each mode of transportation
for (let mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Array of people I'd like to invite to dinner
let invitees: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];

// Printing invitation messages to each person
for (let person of invitees) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}


// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];

// Print statement about the guest who can't make it
console.log(`${guests[1]} can't make it to dinner.`);

// Replace the guest who can't make it with a new invitee
guests[1] = 'Nikola Tesla';

// Print a second set of invitation messages
for (let person of guests) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}


// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];

// Add one new guest to the beginning of the list
guests.unshift('Isaac Newton');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Galileo Galilei');

// Use push() to add one new guest to the end of the list
guests.push('Stephen Hawking');

// Print statement informing about the bigger dinner table
console.log("Good news everyone! We've found a bigger dinner table.");

// Print a new set of invitation messages
for (let person of guests) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}


// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Original guest list
let guests: string[] = ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie', 'Nikola Tesla', 'Stephen Hawking'];

// Print message about inviting only two people for dinner
console.log("Sorry, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    //let removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitation messages to the two remaining guests
for (let person of guests) {
    console.log(`Dear ${person}, you're still invited to dinner.`);
//}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log(guests); // Output should be: []



//18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Array of places to visit
let placesToVisit: string[] = ['Japan', 'New Zealand', 'Italy', 'Iceland', 'Thailand'];

// Print array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show original order is unchanged
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
//console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show original order is still unchanged
console.log("\nOriginal order after reverse sorting:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal order after double reversing:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);



 // 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];

// Print message indicating the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);

// Add one new guest to the beginning of the list
guests.unshift('Isaac Newton');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Galileo Galilei');

// Use push() to add one new guest to the end of the list
guests.push('Stephen Hawking');

// Print message indicating the updated number of people invited to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);



// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Array of programming languages
let programmingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

console.log(programmingLanguages);


// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Object containing information about different programming languages
let programmingLanguagesInfo: { [key: string]: { name: string, yearCreated: number, creator: string } } = {
    'JavaScript': { name: 'JavaScript', yearCreated: 1995, creator: 'Brendan Eich' },
    'Python': { name: 'Python', yearCreated: 1991, creator: 'Guido van Rossum' },
    'Java': { name: 'Java', yearCreated: 1995, creator: 'James Gosling' },
    'C++': { name: 'C++', yearCreated: 1985, creator: 'Bjarne Stroustrup' },
    'Ruby': { name: 'Ruby', yearCreated: 1995, creator: 'Yukihiro Matsumoto' }
};

console.log(programmingLanguagesInfo);


// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Original array
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing an index that doesn't exist to intentionally cause an index error
console.log(numbers[10]); // This will produce an index error since the array only has 5 elements


// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

 let car = 'subaru';

 console.log("Is car == 'subaru'? I predict True.")

 console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let number = 10;

// Test 1: Is number equal to 10?
console.log("Is number == 10? I predict True.");
console.log(number == 10); // True

// Test 2: Is number greater than 5?
console.log("Is number > 5? I predict True.");
console.log(number > 5); // True

// Test 3: Is number less than or equal to 10?
console.log("Is number <= 10? I predict True.");
console.log(number <= 10); // True

// Test 4: Is number not equal to 5?
console.log("Is number != 5? I predict True.");
console.log(number != 5); // True

// Test 5: Is number between 1 and 20?
console.log("Is number between 1 and 20? I predict True.");
console.log(number > 1 && number < 20); // True

// Test 6: Is number equal to 15?
console.log("Is number == 15? I predict False.");
console.log(number == 15); // False

// Test 7: Is number less than 0?
console.log("Is number < 0? I predict False.");
console.log(number < 0); // False

// Test 8: Is number greater than 100?
console.log("Is number > 100? I predict False.");
console.log(number > 100); // False

// Test 9: Is number not equal to 10?
console.log("Is number != 10? I predict False.");
console.log(number != 10); // False

// Test 10: Is number between 11 and 20?
console.log("Is number between 11 and 20? I predict False.");
console.log(number > 11 && number < 20); // False



// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";
const string3: string = "hello";

console.log(string1 === string2); // false
console.log(string1 === string3); // true
console.log(string1 !== string2); // true
console.log(string1 !== string3); // false

// Tests using the lower case function
//const upperCaseString: string = "HELLO";
const lowerCaseString: string = "hello";

console.log(upperCaseString.toLowerCase() === lowerCaseString); // true

// Numerical tests
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

// Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;

console.log(x > 3 && y < 15); // true
console.log(x > 3 && y > 15); // false
console.log(x > 3 || y > 15); // true
console.log(x < 3 || y < 15); // true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];

console.log(3 in array); // true
console.log(6 in array); // false

// Test whether an item is not in an array
console.log(!(3 in array)); // false
console.log(!(6 in array)); // true


//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// Passing version
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Failing version
//alien_color = 'yellow'; // Change the color to something other than green

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");

}



// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Version 1: Alien color is green (correct)
let alienColor1: string = "green";

if (alienColor1 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
     Intentional error: This block should not be executed for a green alien
    console.log("Error: This block should not be executed for a green alien.");
}

// Version 2: Alien color is not green (incorrect)
let alienColor2: string = "red"; // For example

if (alienColor2 === "green") {
     Intentional error: This block should not be executed for a non-green alien
    console.log("Error: This block should not be executed for a non-green alien.");
} else {
    console.log("Player just earned 10 points.");
}


// 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor: string = "green";

if (alienColor === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor === "red") {
    console.log("Player earned 15 points.");
}

//alienColor = "yellow";

if (alienColor === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor === "red") {
    console.log("Player earned 15 points.");
}

//alienColor = "red";

if (alienColor === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor === "red") {
    console.log("Player earned 15 points.");//
}


// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Array of favorite fruits
let favoriteFruits: string[] = ['apple', 'banana', 'orange'];

// Check if 'apple' is in the array
if (favoriteFruits.indexOf('apple') !== -1) {
    console.log("You really like apples!");
}

// Check if 'banana' is in the array
if (favoriteFruits.indexOf('banana') !== -1) {
    console.log("You really like bananas!");
}

// Check if 'orange' is in the array
if (favoriteFruits.indexOf('orange') !== -1) {
    console.log("You really like oranges!");
}

// Check if 'grape' is in the array
if (favoriteFruits.indexOf('grape') !== -1) {
    console.log("You really like grapes!");
}

// Check if 'kiwi' is in the array
if (favoriteFruits.indexOf('kiwi') !== -1) {
    console.log("You really like kiwis!");
}


// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'admin123'];

for (const username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }



// 31.  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users: string[] = []; // Empty array of users

// Check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
     Remove all usernames from the array
    users = [];
    console.log("All usernames have been removed.");
}



// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["john", "mary", "alice", "bob", "jane"];
let new_users: string[] = ["peter", "John", "jerry", "Alice", "susan"];

for (let new_user of new_users) {
    let is_existing = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (is_existing) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}



//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding: string;

    if (numbers[i] === 1) {
        ordinalEnding = "st";
    } else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    } else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${numbers[i]}${ordinalEnding}`);
}


// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop through each animal and print its name
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be a wonderful companion.");
            break;
        case "Rabbit":
            console.log("Rabbits are cute and cuddly pets.");
            break;
       default:
            console.log("This animal is not recognized.");
            break;
    }
    }

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
  console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Calling the function
make_shirt("Medium", "Hello, World!");




// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

class Shirt {
  size: string;
  message: string;

  constructor(size: string = "large", message: string = "I love TypeScript") {
      this.size = size;
      this.message = message;
  }

  display(): void {
      console.log(`Size: ${this.size}, Message: ${this.message}`);
  }
}

function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
  return new Shirt(size, message);
}

// Making a large shirt with the default message
const largeShirtDefault = make_shirt();
largeShirtDefault.display();

// Making a medium shirt with the default message
const mediumShirtDefault = make_shirt("medium");
mediumShirtDefault.display();

// Making a shirt of any size with a different message
const customShirt = make_shirt("small", "Custom message here");
customShirt.display();



// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "USA") {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "United Kingdom");




// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Testing the function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));



// 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist: artist,
      title: title
  };
  if (tracks) {
      album.tracks = tracks;
  }
  return album;
}

// Creating three albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // Album with tracks
const album3 = make_album("Artist3", "Album Title 3");

 Printing album information
console.log(album1);
console.log(album2);
console.log(album3);




// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => {
      console.log(magician);
  });
  }

const magicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];

show_magicians(magicians);




// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define the Magician interface
interface Magician {
  name: string;
}

// Define the array of magicians
let magicians: Magician[] = [
  { name: "Harry Houdini" },
  { name: "David Copperfield" },
  { name: "Penn Jillette" }
];

// Function to add "the Great" to each magician's name
function make_great(magicians: Magician[]): void {
  magicians.forEach(magician => {
      magician.name = "the Great " + magician.name;
  });
}

 Function to display the magicians' names
function show_magicians(magicians: Magician[]): void {
  magicians.forEach(magician => {
      console.log(magician.name);
  });
}

// Call make_great() to modify the magicians array
make_great(magicians);

// Call show_magicians() to display the modified list
show_magicians(magicians);




// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define the function to add "Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
  return magicians.map(name => `Great ${name}`);
}

// Define a function to show magicians' names
function showMagicians(magicians: string[]): void {
  magicians.forEach(name => console.log(name));
}

// Original array of magicians' names
const magiciansOriginal: string[] = ["Harry", "Hermione", "Ron"];

// Make a copy of the original array and add "Great" to each magician's name
const magiciansGreat: string[] = makeGreat([...magiciansOriginal]);

// Show the original array of names
console.log("Original Magicians:");
showMagicians(magiciansOriginal);

// Show the array with "Great" added to each magician's name
console.log("\nMagicians with 'Great':");
showMagicians(magiciansGreat);




// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
  console.log("Making a sandwich with:");
  for (const item of items) {
      console.log("- " + item);
  }
  console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss", "Mustard");




// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = { manufacturer, model };
  options.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
}

const myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2024]);
console.log(myCar);

