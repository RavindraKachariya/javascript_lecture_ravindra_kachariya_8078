// Fetch Products From Fake API
const Products = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        renderProducts(data.products); // render on screen
    } catch (error) {
        console.error("Error:", error);
    }
};

Products();


// Render Products Using Map Method
function renderProducts(products) {
    const productBox = document.getElementById("productBox");

    // 👇 show only first 10 products
    const limitedProducts = products.slice(0, 10);

    productBox.innerHTML = limitedProducts
        .map(
            (item) => `
      <div class="bg-white shadow p-4 rounded-lg">
        <img src="${item.thumbnail}"
             class="w-full h-40 object-cover rounded">

        <h2 class="text-lg font-semibold mt-2">${item.title}</h2>

        <p class="text-gray-600 mb-2">$${item.price}</p>

        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Add to Cart
        </button>
      </div>
    `
        )
        .join("");
}
