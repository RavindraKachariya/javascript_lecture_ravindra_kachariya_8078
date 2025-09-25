// ===============================
// 1. Basic JavaScript Object
// ===============================
{
  let student = {
    name: "Manthan",
    age: 21,
    batch: "JavaScript Batch - Morning",
  };

  console.log(student.name);   // Dot notation
  console.log(student["age"]); // Bracket notation
  console.log(student.batch);
}

// ===============================
// 2. Object Method (function inside object)
// ===============================
{
  let person = {
    firstname: "Jigar",
    lastname: "Pipaliya",
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },
  };

  console.log("Full Name:", person.fullname());
}

// ===============================
// 3. Object with Array
// ===============================
{
  let person = {
    firstname: "Jigar",
    lastname: "Pipaliya",
    marks: [10, 20, 30, 40, 50],
  };

  console.log("Third mark:", person.marks[2]);
}

// ===============================
// 4. Array with Objects
// ===============================
{
  let users = [
    { id: 1, name: "Jigar", marks: 45 },
    { id: 2, name: "Kiran", marks: 56 },
    { id: 3, name: "Khushal", marks: 89 },
    { id: 4, name: "Jinkal", marks: 78 },
  ];

  console.log("User 3:", users[2].name);
}

// ===============================
// 5. Looping through Array of Objects
// ===============================
{
  let users = [
    { id: 1, name: "Jigar", marks: 45 },
    { id: 2, name: "Kiran", marks: 56 },
    { id: 3, name: "Khushal", marks: 89 },
    { id: 4, name: "Jinkal", marks: 78 },
  ];

  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name + " → " + users[i].marks);
  }
}

// ===============================
// 6. Object Access with Conditions
// ===============================
{
  let students = [
    { name: "Satish", marks: 78 },
    { name: "Rakesh", marks: 98 },
    { name: "Prakash", marks: 80 },
  ];

  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 80) {
      console.log(students[i].name + " passed with " + students[i].marks);
    }
  }
}