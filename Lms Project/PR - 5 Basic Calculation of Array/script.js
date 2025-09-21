let numbers = [];

function addNumber() {
    let numInput = document.getElementById("numInput");
    let num = parseFloat(numInput.value);

    if (isNaN(num)) {
        alert("Enter a Valid Number!");
        return;
    }

    numbers.push(num);

    numInput.value = "";

    document.getElementById("numArray").textContent = numbers.join(", ");

    let sum = 0;
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    let avg = sum / numbers.length;

    document.getElementById("sum").textContent = sum;
    document.getElementById("avg").textContent = avg.toFixed(2);
    document.getElementById("max").textContent = max;
    document.getElementById("min").textContent = min;
}