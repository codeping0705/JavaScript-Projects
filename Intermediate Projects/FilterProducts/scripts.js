const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active").textContent.toLowerCase();

    productItems.forEach(item => {
        const name = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category.toLowerCase();

        if ((searchValue === "" || name.includes(searchValue)) &&
            (activeCategory === "all products" || category === activeCategory)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    filterProducts();
}

searchBtn.addEventListener("click", filterProducts);
searchInput.addEventListener("keyup", filterProducts);
categoryBtns.forEach(btn => btn.addEventListener("click", setCategory));

filterProducts(); // Initial call to ensure correct initial display
