// 1. Creating a 2D Array
let multiArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("2D Array : ", multiArray);

// 2. Accessing Elements
console.log("Element at [0][0] : ", multiArray[0][0]);
console.log("Element at [2][1] : ", multiArray[2][1]);

// 3. Modifying an Element
multiArray[1][0] = 33;
console.log("\n3 Modified Multi-Dimensional Array:", multiArray);

// 5. Adding a New Row
multiArray.push([7, 8]);
console.log("\n4 After Adding New Row : ", multiArray);