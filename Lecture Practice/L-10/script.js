/* ===================== Array Example ===================== */
{
    let array = [10, 20, 30, 40, 50];

    console.log("Array Elements:");
    console.log(array);
    console.log(array[0]);
    console.log(array[2]);
}

/* ===================== For-Of Loop (Array & String) ===================== */
{
    let array = [10, 20, 30, 40, 50];

    console.log("\nFor-Of Loop (Array):");
    for (let value of array) {
        console.log(value);
    }

    let str = "Hello JS";
    console.log("\nFor-Of Loop (String):");
    for (let char of str) {
        console.log(char);
    }
}

/* ===================== Object Example ===================== */
{
    let profile = {
        name: "Rakesh",
        age: 30,
        profession: "Developer"
    };

    console.log("\nObject Example:");
    console.log(profile.name);
    console.log(profile["age"]);
}

/* ===================== For-In Loop (Object) ===================== */
{
    let profile = {
        name: "Rakesh",
        age: 30,
        profession: "Developer"
    };

    console.log("\nFor-In Loop (Object):");
    for (let key in profile) {
        console.log(key + " : " + profile[key]);
    }
}
