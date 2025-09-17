// JavaScript Number Object Methods Examples

{
    let text = "789.123abc";

    // Convert string to number
    let floatNum = Number.parseFloat(text);
    let intNum = Number.parseInt(text);

    console.log("parseFloat:", floatNum); 
    console.log("parseInt:", intNum);     

    // Check number types
    console.log("isFinite:", Number.isFinite(floatNum));      
    console.log("isInteger (floatNum):", Number.isInteger(floatNum)); 
    console.log("isInteger (200):", Number.isInteger(200));   
    console.log("isNaN:", Number.isNaN(NaN));                 

    // Safe integer check
    console.log("isSafeInteger(789):", Number.isSafeInteger(intNum)); 
    console.log("isSafeInteger(2^53):", Number.isSafeInteger(2 ** 53)); 

    // Number formatting
    let val = 98765.4321;
    console.log("toExponential(3):", val.toExponential(3));
    console.log("toFixed(1):", val.toFixed(1));             
    console.log("toPrecision(5):", val.toPrecision(5));     

    // Conversion to string in different bases
    console.log("toString (decimal):", intNum.toString());   
    console.log("toString (binary):", intNum.toString(2));  
    console.log("toString (hex):", intNum.toString(16));     

    // Number object wrapper
    let nObj = new Number(250);
    console.log("valueOf:", nObj.valueOf());
}
