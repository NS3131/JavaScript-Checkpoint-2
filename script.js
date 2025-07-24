// String Manipulation Functions:

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
