// Select element
let head = document.getElementById("firstHeading");
console.log("Selected element:", head);

// Using innerHTML
head.innerHTML = "<div>HTML Creator</div>";
console.log("innerHTML:", head.innerHTML);
// Replaces content as HTML (creates <div> inside)

// Using innerText
head.innerText = "<div>Hello World</div>";
console.log("innerText:", head.innerText);
// Treats it as plain text, shows <div>Hello World</div>

// Using textContent
head.textContent = "<span>Hello Creator</span>";
console.log("textContent:", head.textContent);
// Similar to innerText, but includes hidden text (ignores CSS visibility)

// Style change
head.style.display = "none"; // Hides element
console.log("head hidden");

head.style.display = "block"; // Shows element again
console.log("head visible");

// Create inner div
head.innerHTML = "<div id='headText'>Hello World</div>";
let inner = document.getElementById("headText");
console.log("Inner div:", inner);

// Extract text
console.log("head.innerText:", head.innerText);
console.log("head.textContent:", head.textContent);
console.log("inner.innerText:", inner.innerText);
console.log("inner.textContent:", inner.textContent);

// Hide inner div
inner.style.display = "none";

// Difference when hidden
console.log("inner.innerText (hidden):", inner.innerText);
console.log("inner.textContent (hidden):", inner.textContent); 