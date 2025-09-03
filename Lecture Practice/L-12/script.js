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

/* 23. trimEnd() 
   -> Removes whitespace from the end of a string. */
{
    console.log("------ trimEnd() --------");
    let str = "   Ravindra Kachariya   ";
    console.log(str.trimEnd());
}