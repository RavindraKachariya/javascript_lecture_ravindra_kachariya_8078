// let name = prompt("Enter your name :");

// let isSure = confirm("Are you sure you want to continue?");

// if (isSure) {
//     alert("Hello " + name + "! You confirmed to continue.");
// } else {
//     alert("Hello " + name + "! You cancelled the action.");
// }


// Marks & Grade Calculator
{
    console.log("Welcome to the Marks & Grade Calculator!");

    let name = prompt("Enter Student Name : ");

    let math = parseInt(prompt("Enter Math Marks (out of 100) : "));
    let science = parseInt(prompt("Enter Math Science (out of 100) : "));
    let english = parseInt(prompt("Enter Math English (out of 100) : "));

    if (isNaN(math) || isNaN(science) || isNaN(english)) {
        console.log("Invalid Marks Entered, Please Try Again..");
    }
    else {
        let total = math + science + english;
        let average = total / 3;

        let grade;
        if (average >= 90) {
            grade = "A+";
        }
        else if (average >= 75) {
            grade = "A";
        }
        else if (average >= 60) {
            grade = "B";
        }
        else if (average >= 40) {
            grade = "C";
        }
        else {
            grade = "Fail";
        }

        console.log("\n======================================");
        console.log("Student Report Card");
        console.log("--------------------------------------");
        console.log("Name              : ", name);
        console.log("Math Marks        : ", math);
        console.log("Science Marks     : ", science);
        console.log("English Marks     : ", english);
        console.log("--------------------------------------");
        console.log("Total Marks       : ", total + " / 300");
        console.log("Average Marks     : ", average);
        console.log("Grade             : ", grade);
        console.log("======================================\n");
        console.log("Thank you for Using Grade Calculator!");
    }
}