// Object Methods

// 1. Object.groupBy()
let fruits = [
    {
        name: "Apple",
        type: "Fruit"
    },
    {
        name: "Carrot",
        type: "Vegetable"
    },
    {
        name: "Banana",
        type: "Fruit"
    }
];

let grouped = Object.groupBy(fruits, f => f.type);
console.log("groupBy() : ", grouped);

// 2. Object.hasOwn()
let product = {
    id: 1,
    name: "Laptop"
};
console.log("hasOwn id : ", Object.hasOwn(product, "id"));
console.log("hasOwn price : ", Object.hasOwn(product, "price"));

// 3. Object.is()
console.log("is 10, 10 : ", Object.is(10, 10));
console.log("is NaN, NaN : ", Object.is(NaN, NaN));
console.log("is 0, -0 : ", Object.is(0, -0));

// 4. Object.keys()
console.log("keys : ", Object.keys(product));

// 5. Object.values()
console.log("values : ", Object.values(product));

// 6. Object.entries()
console.log("entries : ", Object.entries(product));

// 7. Object.fromEntries()
let entries = [
    ["id", 2],
    ["name", "Phone"]
];
let obj = Object.fromEntries(entries);
console.log("fromEntries : ", obj);