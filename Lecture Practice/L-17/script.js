// JavaScript Map Methods Example

// Create a Map with some key-value pairs
let userMap = new Map([
    ["id", 101],
    ["name", "Ravindra"],
    ["role", "Developer"]
]);

// set() → add a new key-value pair
userMap.set("language", "JavaScript");

// get() → retrieve a value
console.log("Name:", userMap.get("name"));

// has() → check if a key exists
console.log("Has 'role'?", userMap.has("role")); 
console.log("Has 'salary'?", userMap.has("salary"));

// size → number of entries
console.log("Map Size : ", userMap.size); // 4

// delete() → remove a key
userMap.delete("role");
console.log("After delete 'role' : ", userMap);

// values() → all values
console.log("Values : ", [...userMap.values()]);

// keys() → all keys
console.log("Keys : ", [...userMap.keys()]);

console.log("Entries : ", [...userMap.entries()]);

// clear() → remove everything
userMap.clear();
console.log("After clear : ", userMap);