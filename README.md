# Palindrome Checker - JS Explanation

This JavaScript code validates whether the input text is a palindrome by cleaning the text, comparing its characters, and outputting the result.

## Functions:

### `checkValidInput()`
- **Purpose**: Triggers when the "Check" button is clicked.
- **Process**:
  1. Fetches the input text.
  2. Clears the input field.
  3. Validates if input is empty and alerts the user if so.
  4. Cleans the input text by removing non-alphanumeric characters and converting it to lowercase.
  5. Checks if the cleaned text is a palindrome and updates the result on the webpage.

### `cleanText(text)`
- **Purpose**: Cleans the input text by converting it to lowercase and removing non-alphanumeric characters.
- **Process**:
  1. Converts text to lowercase.
  2. Uses a regex pattern (`/[a-z0-9]/g`) to extract only letters and numbers from the text.

### `isPalindrome(text)`
- **Purpose**: Checks if the cleaned text is a palindrome.
- **Process**:
  1. Iterates over the text by comparing the first and last elements.
  2. Removes elements from both ends using `shift()` and `pop()` methods.
  3. Returns `true` if all characters match, otherwise `false`.

### Event Listener:
- **Purpose**: Listens for a click on the "Check" button and calls `checkValidInput()`.

## Key Points:
- **Regex**: Used to clean the text and remove unwanted characters.
- **Array methods**: `shift()` and `pop()` are used to compare the characters from both ends of the string.
