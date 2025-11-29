let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

// Save To Storage
function saveToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

// Add Product
function addProduct() {
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();
    const category = document.getElementById("category").value.trim();

    if (!title || !price) {
        alert("Title and price are required!");
        return;
    }

    const product = {
        id: Date.now(),
        title,
        price: Number(price),
        image: image || "https://picsum.photos/id/1/200/300",
        category
    };

    products.push(product);
    saveToStorage();
    clearForm();
    renderProducts();
}

// Display Product
function renderProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    let filteredProducts = [...products];

    // Search
    const search = document.getElementById("search").value.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
        p.title.toLowerCase().includes(search)
    );

    // Filter Category
    const filterCat = document.getElementById("filterCategory").value;
    if (filterCat)
        filteredProducts = filteredProducts.filter(p => p.category === filterCat);

    // Sort Price
    const sort = document.getElementById("sortPrice").value;
    if (sort === "low") filteredProducts.sort((a, b) => a.price - b.price);
    if (sort === "high") filteredProducts.sort((a, b) => b.price - a.price);

    // Update Category Dropdown
    updateCategoryFilter();

    // Show Products
    filteredProducts.forEach((p, index) => {
        list.innerHTML += `
                <div class="bg-white shadow rounded-xl p-3">
                    <img src="${p.image}" class="w-full h-40 object-cover rounded" />

                    <h3 class="font-bold mt-2">${p.title}</h3>
                    <p class="text-gray-700">₹${p.price}</p>
                    <p class="text-sm text-blue-600">${p.category}</p>

                    <div class="mt-3 flex gap-2">
                        <button onclick="editProduct(${p.id})"
                            class="bg-green-500 text-white px-3 py-1 rounded">Edit</button>

                        <button onclick="deleteProduct(${p.id})"
                            class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
            `;
    });
}

// Update Category Dropdown
function updateCategoryFilter() {
    const categories = [...new Set(products.map(p => p.category))];
    const dropdown = document.getElementById("filterCategory");

    let options = `<option value="">All Category</option>`;
    categories.forEach(cat => {
        if (cat.trim() !== "") {
            options += `<option value="${cat}">${cat}</option>`;
        }
    });

    dropdown.innerHTML = options;
}

// Delete Product
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveToStorage();
    renderProducts();
}

// Edit Product
function editProduct(id) {
    const product = products.find(p => p.id === id);
    editIndex = id;

    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;
    document.getElementById("category").value = product.category;

    document.getElementById("addBtn").classList.add("hidden");
    document.getElementById("updateBtn").classList.remove("hidden");
}

// Update Product
function updateProduct() {
    const index = products.findIndex(p => p.id === editIndex);

    products[index].title = document.getElementById("title").value;
    products[index].price = Number(document.getElementById("price").value);
    products[index].image = document.getElementById("image").value;
    products[index].category = document.getElementById("category").value;

    saveToStorage();
    clearForm();
    renderProducts();

    document.getElementById("addBtn").classList.remove("hidden");
    document.getElementById("updateBtn").classList.add("hidden");
}

// Clear Form
function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("category").value = "";
}

// Load Data
renderProducts();