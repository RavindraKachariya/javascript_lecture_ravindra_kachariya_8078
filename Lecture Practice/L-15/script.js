/* JavaScript Math.Object Methods */

// The Math namespace object contains static properties and methods for mathematical constants and functions.

{
    // Math.E

    let math = Math.E;
    console.log("Euler Number : ", math);
}

{
    // Math.PI

    let math = Math.PI;
    console.log("PI Value : ", math);
}

{
    // Math.pow()

    let math = Math.pow(3, 4);
    console.log("3^4 = ", math);
}

{
    // Math.ceil()

    let math = Math.ceil(7.2);
    console.log("Ceil : ", math);
}

{
    // Math.floor()

    let math = Math.floor(7.9);
    console.log("Floor : ", math);
}

{
    // Math.trunc()

    let math = Math.trunc(56.987);
    console.log("Trunc : ", math);
}

{
    // Math.max() / Math.min()

    let values = [99, 12, 56, 78, 3];

    let maxVal = Math.max(...values);
    let minVal = Math.min(...values);

    console.log("Max : ", maxVal);
    console.log("Min : ", minVal);
}

{
    // Math.sqrt()

    let math = Math.sqrt(81);
    console.log("Square Root : ", math); 
}

{
    // Math.log() / Math.log2() / Math.log10()

    let num = 16;

    console.log("ln(16) : ", Math.log(num));
    console.log("log2(16) : ", Math.log2(num));
    console.log("log10(16) : ", Math.log10(num));
}

{
    // Math.random()

    let math = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number : ", math);
}

{
    // Math.sign()

    console.log(Math.sign(-10)); 
    console.log(Math.sign(0));  
    console.log(Math.sign(50)); 
}

{
    // Math.abs()

    let math = Math.abs(-1234);
    console.log("Absolute : ", math);
}

{
    // Math.sin() / Math.cos() / Math.tan()

    let deg = 60;
    let rad = deg * (Math.PI / 180);

    console.log("sin(60 deg) : ", Math.sin(rad));
    console.log("cos(60 deg) : ", Math.cos(rad));
    console.log("tan(60 deg) : ", Math.tan(rad));
}

{
    // Math.round()

    let math = Math.round(14.6);
    console.log("Rounded : ", math);
}
