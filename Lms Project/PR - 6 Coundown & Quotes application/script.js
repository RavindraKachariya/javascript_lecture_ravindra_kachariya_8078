// ===== TIMER APP =====
let timer;
let timeLeft;
const display = document.getElementById("display");
const message = document.getElementById("message");
const timeInput = document.getElementById("timeInput");

function startTimer() {
    clearInterval(timer);
    timeLeft = parseInt(timeInput.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        message.textContent = "⚠️ Please enter valid seconds!";
        message.classList.replace("text-gray-400", "text-red-400");
        return;
    }

    message.textContent = "";
    display.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        display.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            message.textContent = "🎉 Time's up!";
            message.classList.replace("text-red-400", "text-gray-400");
            showQuote();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    display.textContent = "0";
    message.textContent = "🛑 Timer stopped";
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);

// ===== QUOTE APP =====
const quotes = [
    { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "If you want to walk fast, walk alone. But if you want to walk far, walk together.", author: "Ratan Tata" },
    { text: "It is fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Narayana Murthy" },
    { text: "As a leader, it’s important to not just see your own success, but focus on the success of others.", author: "Sundar Pichai" },
    { text: "Programming is not about typing, it’s about thinking.", author: "Rich Hickey" },
    { text: "Don’t let your dreams remain dreams. Work hard, stay consistent.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Technology should improve your life, not become your life.", author: "Shiv Nadar" },
    { text: "Fail early, fail fast, learn faster.", author: "Narayana Murthy" },
    { text: "Have the courage to follow your heart and intuition.", author: "Sundar Pichai" },
    { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
    { text: "Innovation and creativity are the keys to progress.", author: "Azim Premji" },
    { text: "Clarity of purpose and perseverance will take you far.", author: "Narayana Murthy" },
];

function showQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = `"${q.text}"`;
    document.getElementById("authorText").textContent = `– ${q.author}`;
}

document.getElementById("newQuoteBtn").addEventListener("click", showQuote);
showQuote();
