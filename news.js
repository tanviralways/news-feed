const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
  const newsCategories = document.getElementById("news-catagories");
  for (const category of categories) {
    console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
 <h3>${category.category_name}</h3>
 `;

    newsCategories.appendChild(categoryDiv);
  }
};
loadCategories();
