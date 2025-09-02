let student = {
    name: "   ravinDRa kachaRIya   ",
    marks: [85, 75, 83]
};

student.name = student.name.trim().toLowerCase();
student.name = student.name.charAt(0).toUpperCase() + student.name.slice(1);

let total = 0;
for (let i = 0; i < student.marks.length; i++) {
    total += student.marks[i];
}

let pr = total / student.marks.length;

let grade = "";
if (pr >= 90) {
    grade = "A+";
}
else if (pr >= 80) {
    grade = "A";
}
else if (pr >= 60) {
    grade = "B";
}
else if (pr >= 40) {
    grade = "C";
}
else {
    grade = "F";
}

let feedback = "";

switch (grade) {
    case "A+":
        feedback = "Outstanding performance!";
        break;
    case "A":
        feedback = "Excellent work!";
        break;
    case "B":
        feedback = "Good job, keep improving.";
        break;
    case "C":
        feedback = "Needs more practice";
        break;
    default:
        feedback = "Failed. Work harder next time!";
}

console.log("       Student Report Card");
console.log("---------------------------------");
console.log("Name       : ", student.name);+
console.log("Marks      : ", student.marks);
console.log("Total      : ", total);
console.log("Percentage : ", pr + "%");
console.log("Grade      : ", grade);
console.log("Feedback   : ", feedback);