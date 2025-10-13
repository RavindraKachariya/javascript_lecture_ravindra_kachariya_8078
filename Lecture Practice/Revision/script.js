// DOM Manipulation Examples

// getElementByClassName
function change() {
    const h1 = document.getElementsByClassName("heading1")[0];
    h1.textContent = "DOM Changed";
    h1.style.backgroundColor = "green";
    h1.style.color = "white";
    console.log("Tile Changed");
}

// getElementById
function addToCart() {
    document.getElementById("btn").innerHTML = "Added To Cart";
    console.log("Button Text Change");
}

// Array.map()
const list = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
];

function showList() {
    list.map((item, i) => {
        document.getElementById(`li-${i}`).innerHTML = `${item}`;
    });
}

// Timing Functions
// setTimeout(), clearTimeout(), setInterval(), clearInterval()

let count = 10;
let Id;

function startCounter() {
    count = 10;
    document.getElementById("title").innerHTML = `Counter: ${count}`;

    clearInterval(Id);

    Id = setInterval(() => {
        document.getElementById("title").innerHTML = `Counter: ${count}`;
        count--;

        if (count < 0) {
            clearInterval(Id);
            document.getElementById("title").innerHTML = "Countdown Finish";
        }
    }, 1000);
}