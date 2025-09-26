// --------------------------------
// Simple UDFs (Normal Functions)
// --------------------------------

{
    // 1. Simple Addition Function
    function addNumbers(a, b) {
        return a + b;
    }
    console.log("Addition (5 + 3) : ", addNumbers(5, 3));
}

{
    // 2. Check Even or Odd
    function checkEvenOdd(num) {
        return num % 2 === 0 ? "Even" : "Odd";
    }
    console.log("Check Even/Odd (7) : ", checkEvenOdd(7));
    console.log("Check Even/Odd (10) : ", checkEvenOdd(10));
}

{
    // 3. Square of a Number
    function squareNumber(num) {
        return num * num;
    }
    console.log("Square of 6 : ", squareNumber(6));
}

{
    // 4. String Capitalizer
    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log("Capitalize 'hello' : ", capitalizeString("hello"));
    console.log("Capitalize 'jAVaScRiPt' : ", capitalizeString("jAVaScRiPt"));
}


// -----------------
// Arrow Functions
// -----------------

{
    // 1. Simple Addition Function
    const addNumbersArrow = (a, b) => a + b;
    console.log("Addition (8 + 4) : ", addNumbersArrow(8, 4));
}

{
    // 2. Check Even or Odd
    const checkEvenOddArrow = (num) => (num % 2 === 0 ? "Even" : "Odd");
    console.log("Check Even/Odd (15) : ", checkEvenOddArrow(15));
    console.log("Check Even/Odd (20) : ", checkEvenOddArrow(20));
}

{
    // 3. Square of a Number
    const squareNumberArrow = (num) => num * num;
    console.log("Square of 9 : ", squareNumberArrow(9));
}

{
    // 4. String Capitalizer
    const capitalizeStringArrow = (str) => {
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log("Capitalize 'world' : ", capitalizeStringArrow("world"));
    console.log("Capitalize 'PYTHON' : ", capitalizeStringArrow("PYTHON"));
}
