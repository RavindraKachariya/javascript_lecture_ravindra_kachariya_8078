// STATE 
let products = [];
let cart = [];

// API
const API = "https://fakestoreapi.com/products";

// Fetch Products
async function fetchProducts() {
    const res = await fetch(API);
    products = await res.json();
    renderProducts();
}

// Render Products
const productList = document.getElementById("product-list");

function renderProducts() {
    productList.innerHTML = "";

    products.forEach(p => {
        productList.innerHTML += `
      <div class="bg-white p-4 rounded-xl shadow border flex flex-col">
        <div onclick="openModal(${p.id})" class="cursor-pointer">
          <img src="${p.image}" class="h-40 object-contain mb-4">
          <h4 class="font-bold text-sm line-clamp-2">${p.title}</h4>
        </div>

        <p class="text-yellow-600 font-bold mt-2">
          ₹${Math.round(p.price * 80)}
        </p>

        <button onclick="addToCart(${p.id})"
          class="mt-auto bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700">
          Add to Cart
        </button>
      </div>
    `;
    });
}

// Modal
function openModal(id) {
    const p = products.find(p => p.id === id);

    document.getElementById("modal-content").innerHTML = `
    <img src="${p.image}" class="h-80 object-contain mx-auto">
    <div>
      <h2 class="text-2xl font-bold mb-3">${p.title}</h2>
      <p class="text-gray-600 mb-4">${p.description}</p>
      <p class="text-2xl font-bold text-yellow-600 mb-6">
        ₹${Math.round(p.price * 80)}
      </p>
      <button onclick="addToCart(${p.id})"
        class="bg-yellow-600 text-white px-6 py-3 rounded-lg">
        Add to Cart
      </button>
    </div>
  `;

    document.getElementById("product-modal").classList.remove("hidden");
    document.getElementById("product-modal").classList.add("flex");
}

function closeModal() {
    document.getElementById("product-modal").classList.add("hidden");
}

// Add To Cart
function addToCart(id) {
    const p = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            id: p.id,
            name: p.title,
            price: Math.round(p.price * 80),
            image: p.image,
            qty: 1
        });
    }

    renderCart();
}

//  Cart Render
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        cartItems.innerHTML += `
      <div class="flex gap-3 bg-gray-100 p-3 rounded-lg items-center">
        <img src="${item.image}" class="w-14 h-14 object-contain">

        <div class="flex-1">
          <p class="font-semibold text-sm">${item.name}</p>
          <div class="flex items-center gap-2 mt-1">
            <button onclick="changeQty(${item.id},-1)"
              class="w-6 h-6 bg-gray-300 rounded font-bold">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id},1)"
              class="w-6 h-6 bg-gray-300 rounded font-bold">+</button>
          </div>
        </div>

        <div class="text-right">
          <p class="font-bold">₹${itemTotal}</p>
          <button onclick="removeItem(${item.id})"
            class="text-red-500 font-bold">✕</button>
        </div>
      </div>
    `;
    });

    cartTotal.innerText = `₹${total}`;
}

// Cart Actions
function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) removeItem(id);
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
}

// Init
fetchProducts();
