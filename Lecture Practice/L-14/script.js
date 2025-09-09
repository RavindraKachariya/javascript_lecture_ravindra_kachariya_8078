/* 19. replace(searchValue, replaceValue)
   -> Replaces part of the string matched by regex.
*/
{
    let str = "I think Ruth's Dog is cuter than your Dog";
    let regex = /Dog/g;

    let result = str.replace(regex, "cat");
    console.log(result);
}

/* 2. replaceAll(searchValue, replaceValue)
   -> Replaces all matches of regex/string (introduced in ES2021).
*/
{
    let str = "I think Ruth's Dog is cuter than your Dog!";
    let regex = /Dog/g;

    let result = str.replaceAll(regex, "cat");
    console.log(result);
}

/* 3. search(regexp)
   -> Returns the index of the first match or -1 if not found.
*/
{
    let str = "Ravindra Kachariya";
    let regex1 = /Ka/g;
    let regex2 = /xyz/g;

    console.log(str.search(regex1));
    console.log(str.search(regex2));
}

/* 4. split(separator, limit)
   -> Splits a string using regex as separator.
*/
{
    let str = "one,two;three|four";
    let regex = /[,;|]/;

    let result = str.split(regex);
    console.log(result);

    let result2 = str.split(regex, 2);
    console.log(result2);
}


