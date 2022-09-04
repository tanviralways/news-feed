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

    categoryDiv.innerHTML = `
 <button class="p-6 hover:text-violet-400 active:bg-violet-700" onclick='loadCategoryNews("${category.category_id}")'>${category.category_name}</button>
 `;
    newsCategories.appendChild(categoryDiv);
  }
};

const loadCategoryNews = (code) => {
  const url = ` https://openapi.programming-hero.com/api/news/category/${code}`;
  console.log("get details", code);
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoryNews(data.data[0]));
};

const displayCategoryNews = (news) => {
  console.log(news);
  const categoryNews = document.getElementById("category-news");

  categoryNews.innerHTML = `
  
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="${news.image_url}"  /></figure>
  <div class="card-body">
    <h2 class="card-title">${news.title}</h2>
    <p>${
      news.details.length > 280
        ? news.details.slice(0, 280) + "..."
        : news.details
    }</p>
    <div class="card-actions justify-around">
    <img class="w-16 rounded-full" src="${news.author.img}">
    <p>${news.author.name}</p>
    <p>view: ${news.total_view}</p>
    <button class="btn btn-primary" onclick="loadNewsDetails('${
      news._id
    }')">Details</button>
    </div>
  </div>
</div>
    `;
};
const loadNewsDetails = (newsId) => {
  console.log(newsId);

  const newsDetailsUrl = `"https://openapi.programming-hero.com/api/news/${newsId}"`;
  console.log(newsDetailsUrl);

  fetch(newsDetailsUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
loadCategories("");
