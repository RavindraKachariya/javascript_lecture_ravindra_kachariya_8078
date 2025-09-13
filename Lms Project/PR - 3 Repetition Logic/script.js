let isRunning = true;

function showTable() {
    if (!isRunning) return;

    const num = +document.getElementById("tableInput").value;
    if (!num) {
        alert("Please enter a valid number.");
        return;
    }

    let result = `Multiplication Table of ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`;
    }

    document.getElementById("output").innerText = result;
}

function showEven() {
    if (!isRunning) return;

    const max = +document.getElementById("evenInput").value;
    if (!max) {
        alert("Please enter a valid number.");
        return;
    }

    let result = `Even numbers up to ${max}:\n`;
    for (let i = 2; i <= max; i += 2) {
        result += i + " ";
    }

    document.getElementById("output").innerText = result;
}

function exitProgram() {
    if (!isRunning) return;

    if (confirm("Do you want to exit?")) {
        isRunning = false;
        document.getElementById("output").innerText = "Program exited. Reload the page to restart.";
    }
}
