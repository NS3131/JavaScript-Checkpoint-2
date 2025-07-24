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





// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.