let quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { quote: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success usually comes to those who are too busy to be looking forit.", author: "Henry David Thoreau" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

function generateRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    document.getElementById("quote").innerHTML = `"${selectedQuote.quote}"`;
    document.getElementById("author").innerHTML = `"${selectedQuote.author}"`;
}

generateRandomQuote();