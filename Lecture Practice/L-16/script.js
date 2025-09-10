// JavaScript Function
{
    function checkEvenOdd(num) {
        if (typeof num !== 'number') {
            return "Not a number";
        } else if (num % 2 === 0) {
            return num + " is Even";
        } else {
            return num + " is Odd";
        }
    }

    console.log(checkEvenOdd(8));
    console.log(checkEvenOdd(7));
    console.log(checkEvenOdd("a"));
}

// JavaScript Arrow Function
{
    const checkEvenOddArrow = (num) => {
        if (typeof num !== 'number') {
            return "Not a number";
        } else if (num % 2 === 0) {
            return num + " is Even";
        } else {
            return num + " is Odd";
        }
    }

    console.log(checkEvenOddArrow(14));
    console.log(checkEvenOddArrow(3));
    console.log(checkEvenOddArrow(true));
}
