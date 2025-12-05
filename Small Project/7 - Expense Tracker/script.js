let selectedType = "income";
const form = document.getElementById("transactionForm");
const list = document.getElementById("transactionList");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const filterSelect = document.getElementById("filter");
const exportBtn = document.getElementById("exportCSV");

let editId = null;

// Toggle Buttons
document.getElementById("btnIncome").onclick = () => {
    selectedType = "income";
    toggleButtons();
};
document.getElementById("btnExpense").onclick = () => {
    selectedType = "expense";
    toggleButtons();
};

function toggleButtons() {
    document.getElementById("btnIncome").classList.toggle("bg-green-500", selectedType === "income");
    document.getElementById("btnIncome").classList.toggle("text-white", selectedType === "income");

    document.getElementById("btnExpense").classList.toggle("bg-red-500", selectedType === "expense");
    document.getElementById("btnExpense").classList.toggle("text-white", selectedType === "expense");
}

// Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = getData();

    const transaction = {
        id: editId ? editId : Date.now(),
        type: selectedType,
        name: document.getElementById("name").value,
        amount: Number(document.getElementById("amount").value),
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
    };

    if (editId) {
        const index = data.findIndex((x) => x.id === editId);
        data[index] = transaction;
        editId = null;
    } else {
        data.push(transaction);
    }

    saveData(data);
    form.reset();
    render(filterSelect.value);
});

// Render UI
function render(filter = "all") {
    const data = applyFilter(getData(), filter);
    list.innerHTML = "";
    let income = 0, expense = 0;

    data.forEach((item) => {
        if (item.type === "income") income += item.amount;
        else expense += item.amount;

        const li = document.createElement("li");
        li.className = `p-2 rounded flex flex-col gap-1 mb-2 shadow ${item.type === "income" ? "bg-green-100" : "bg-red-100"
            }`;

        li.innerHTML = `
      <div class="flex justify-between font-semibold">
        <span>${item.name} (₹${item.amount})</span>
        <div class="flex gap-2">
          <button class="edit bg-blue-600 text-white px-2 rounded text-sm">Edit</button>
          <button class="delete bg-red-600 text-white px-2 rounded text-sm">X</button>
        </div>
      </div>
      <div class="text-xs flex justify-between">
        <span>${item.category}</span>
        <span>${item.date}</span>
      </div>
    `;

        // Delete
        li.querySelector(".delete").onclick = () => {
            const newData = getData().filter((x) => x.id !== item.id);
            saveData(newData);
            render(filter);
        };

        // Edit
        li.querySelector(".edit").onclick = () => {
            editId = item.id;
            selectedType = item.type;
            toggleButtons();

            document.getElementById("name").value = item.name;
            document.getElementById("amount").value = item.amount;
            document.getElementById("date").value = item.date;
            document.getElementById("category").value = item.category;
        };

        list.appendChild(li);
    });

    balanceEl.textContent = `₹${(income - expense).toFixed(2)}`;
    incomeEl.textContent = `₹${income.toFixed(2)}`;
    expenseEl.textContent = `₹${expense.toFixed(2)}`;

    updateChart(getData());
}

// Filter Change
filterSelect.onchange = (e) => render(e.target.value);

// Local Storage
function getData() {
    return JSON.parse(localStorage.getItem("records") || "[]");
}
function saveData(data) {
    localStorage.setItem("records", JSON.stringify(data));
}

// Filter Logic
function applyFilter(data, filter) {
    const today = new Date();

    if (filter === "today")
        return data.filter((x) => new Date(x.date).toDateString() === today.toDateString());

    if (filter === "week") {
        const week = Math.floor((today.getDate() - 1) / 7);
        return data.filter((x) => Math.floor((new Date(x.date).getDate() - 1) / 7) === week);
    }

    if (filter === "month")
        return data.filter((x) => new Date(x.date).getMonth() === today.getMonth());

    return data;
}

// CSV Export
exportBtn.onclick = () => {
    const rows = [["Name", "Amount", "Type", "Category", "Date"]];
    getData().forEach((x) => rows.push([x.name, x.amount, x.type, x.category, x.date]));
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "expense-data.csv";
    link.click();
};

// Chart.js
let chartInstance = null;

function updateChart(data) {
    const months = Array(12).fill(0);

    data.forEach((item) => {
        const m = new Date(item.date).getMonth();
        months[m] += item.type === "income" ? item.amount : -item.amount;
    });

    const ctx = document.getElementById("chart").getContext("2d");

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Net Balance",
                    data: months,
                },
            ],
        },
    });
}

// Start
toggleButtons();
render();
