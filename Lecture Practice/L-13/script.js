//  JavaScript Regex (Regular Expressions)
// ------------------------------------------------------
// What is Regex?
// Regex (Regular Expression) is a sequence of characters
// that defines a search pattern. It is mainly used for
// string matching, searching, validation, and replacement.
// In JavaScript, regex is written between / / slashes.
// Example: let pattern = /abc/; // matches the string "abc"

// ------------------------------------------------------
//  Example 1: Mobile Number Validation (India Standard)
// Rule: Must be 10 digits, starting with 6, 7, 8, or 9
function validateMobile(mobile) {
    let regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
}

console.log(validateMobile("9876543210"));
console.log(validateMobile("1234567890"));

// Explanation:
// ^          -> start of string
// [6-9]      -> first digit must be 6,7,8, or 9
// \d{9}      -> next 9 digits must be numbers
// $          -> end of string

// ------------------------------------------------------
//  Example 2: Email Validation
// Rule: Simple email format with @ and domain
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
}

console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid@.com")); 

// Explanation:
// ^[a-zA-Z0-9._%+-]+  -> local part (before @)
// @                   -> must contain @
// [a-zA-Z0-9.-]+      -> domain name
// \. [a-z]{2,}$       -> dot + 2 or more letters (like .com, .org)

// ------------------------------------------------------
//  Key Points about Regex in JS
// - Use /pattern/ to define regex.
// - .test(string) returns true/false if string matches.
// - Useful for form validation, search filters, etc.
