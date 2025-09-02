/* JavaScript String
    -> The String object is used to represent and manipulate a sequence of characters.*/

// ========================= //
// JavaScript String Methods //
// ========================= //

/* 1. at(index) 
   -> Returns the character at the given index (supports negative index). */
{
    console.log("------ at(index) --------");
    let str = "Ravindra Kachariya";
    console.log(str.at(3));
    console.log(str.at(-1));
}

/* 2. charAt(index) 
   → Returns the character at the given index (does not support negative index). */
{
    console.log("------ charAt(index) --------");
    let str = "Ravindra Kachariya";
    console.log(str.charAt(3));
    console.log(str.charAt(10));
}

/* 3. charCodeAt(index) 
   → Returns the UTF-16 code of the character at the given index. */
{
    console.log("------ charCodeAt(index) --------");
    let str = "Ravindra Kachariya";
    console.log(str.charCodeAt(0));
}

/* 4. codePointAt(index) 
   → Returns the Unicode code point value at the given index. */
{
    console.log("------ codePointAt(index) --------");
    let str = "Ravindra Kachariya";
    console.log(str.codePointAt(5));
}

/* 5. concat(str1, str2, ...) 
   -> Joins two or more strings into one. */
{
    console.log("------ concat() --------");
    let str1 = "Ravindra";
    let str2 = "Kachariya";
    console.log(str1.concat(" ", str2));
}

/* 6. includes(searchString, position) 
   -> Checks if the string contains the given substring. */
{
    console.log("------ includes() --------");
    let str = "Ravindra Kachariya";
    console.log(str.includes("Ravi"));
    console.log(str.includes("Kachariya", 10));
}

/* 7. endsWith(searchString, endPosition) 
   -> Checks if the string ends with the given substring. */
{
    console.log("------ endsWith() --------");
    let str = "Ravindra Kachariya";
    console.log(str.endsWith("Kachariya"));
    console.log(str.endsWith("Ravi", 4));
}

/* 8. indexOf(searchString, position) 
   -> Returns the first index of the given substring, or -1 if not found. */
{
    console.log("------ indexOf() --------");
    let str = "Ravindra Kachariya";
    console.log(str.indexOf("a"));
    console.log(str.indexOf("a", 5));
}

/* 9. lastIndexOf(searchString, position) 
   -> Returns the last index of the given substring, or -1 if not found. */
{
    console.log("------ lastIndexOf() --------");
    let str = "Ravindra Kachariya";
    console.log(str.lastIndexOf("a"));
    console.log(str.lastIndexOf("a", 10));
}

/* 10. padStart(targetLength, padString) 
   -> Pads string at the beginning to reach the target length. */
{
    console.log("------ padStart() --------");
    let str = "Ravi";
    console.log(str.padStart(15, "."));
}

/* 11. padEnd(targetLength, padString) 
   -> Pads string at the end to reach the target length. */
{
    console.log("------ padEnd() --------");
    let str = "Ravi";
    console.log(str.padEnd(15, "."));
}

/* 12. repeat(count) 
   -> Returns a string repeated the given number of times. */
{
    console.log("------ repeat() --------");
    let str = "Ravi ";
    console.log(str.repeat(3));
}

/* 13. replace(pattern, replacement) 
   -> Replaces the first match of pattern with replacement. */
{
    console.log("------ replace() --------");
    let str = "Ravindra likes coding.";
    console.log(str.replace("coding", "teaching"));
}

/* 14. replaceAll(pattern, replacement) 
   -> Replaces all matches of pattern with replacement. */
{
    console.log("------ replaceAll() --------");
    let str = "Ravi is smart. Ravi is hardworking.";
    console.log(str.replaceAll("Ravi", "Kachariya"));
}

/* 15. slice(start, end) 
   -> Extracts part of a string and returns it. */
{
    console.log("------ slice() --------");
    let str = "Ravindra Kachariya";
    console.log(str.slice(0, 8));
    console.log(str.slice(-9));
}

/* 16. split(separator, limit) 
   -> Splits a string into an array by the given separator. */
{
    console.log("------ split() --------");
    let str = "Ravindra";
    console.log(str.split(""));
    console.log(str.split("", 4));
}

/* 17. startsWith(searchString, position) 
   -> Checks if a string starts with the given substring. */
{
    console.log("------ startsWith() --------");
    let str = "Ravindra Kachariya";
    console.log(str.startsWith("Ravi"));
    console.log(str.startsWith("Kachariya", 9));
}

/* 18. substring(start, end) 
   -> Returns part of a string between start and end indexes. */
{
    console.log("------ substring() --------");
    let str = "Ravindra";
    console.log(str.substring(1, 5));
}

/* 19. toUpperCase() 
   -> Converts string to uppercase. */
{
    console.log("------ toUpperCase() --------");
    let str = "ravindra";
    console.log(str.toUpperCase());
}

/* 20. toLowerCase() 
   -> Converts string to lowercase. */
{
    console.log("------ toLowerCase() --------");
    let str = "KACHARIYA";
    console.log(str.toLowerCase());
}

/* 21. trim() 
   -> Removes whitespace from both ends of a string. */
{
    console.log("------ trim() --------");
    let str = "   Ravindra Kachariya   ";
    console.log(str.trim());
}

/* 22. trimStart() 
   -> Removes whitespace from the start of a string. */
{
    console.log("------ trimStart() --------");
    let str = "   Ravindra Kachariya   ";
    console.log(str.trimStart());
}