//STRING MANIPULATION FUNCTIONS:

// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  let reversed = "";

  // Loop from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character to the result
  }

  return reversed;
}

// 🧪 Example usage:
console.log(reverseString("hello")); // ➤ "olleh"



// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
  let count = 0;

  // Loop through the string and count each character
  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
}

// 🧪 Example usage:
console.log(countCharacters("Hello, world!")); // ➤ 13





// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  return sentence
    .split(" ") // Step 1: Split the sentence into individual words
    .map(word => 
      word[0].toUpperCase() + word.slice(1) // Step 2: Capitalize the first letter and add the rest
    )
    .join(" "); // Step 3: Join the words back into a full sentence with spaces
}

// 🧪 Example usage:
console.log(capitalizeWords("hello world from javascript")); 
// ➤ "Hello World From Javascript"
// -------------------------------
// ARRAY FUNCTIONS:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
  let max = arr[0]; // Start with the first number

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current number is greater
    }
  }

  return max; // Return the highest value
}




// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
  let sum = 0; // Start with 0

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add current element to sum
  }

  return sum; // Return the final total
}

// 🧪 Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // ➤ 15



// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, conditionFn) {
  let result = [];

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Only add element if it passes the condition
    if (conditionFn(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result; // Return filtered array
}
