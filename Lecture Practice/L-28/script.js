// 1. Basic JSON Creation
let basicJSON = {
    name: "Ravi",
    age: 22,
    city: "Surat"
};
console.log("Basic JSON Object : ", basicJSON);

// 2. Advanced JSON Creation (Simple Nested JSON)
let advancedJSON = {
    company: "Dalli Nesh™",
    employees: [
        { name: "Amit", role: "Developer" },
        { name: "Sneh", role: "Designer" }
    ],
    address: {
        city: "Mumbai",
        country: "India"
    }
};
console.log("Advanced JSON Object : ", advancedJSON);

// 3. JSON.stringify()
let jsonString = JSON.stringify(advancedJSON);
console.log("JSON.stringify Result : ", jsonString);

// 4. JSON.parse()
let jsonStringData = '{"name":"Sneh","age":25}';
let parsedObject = JSON.parse(jsonStringData);
console.log("JSON.parse Result : ", parsedObject);