const url = "http://192.168.3.38:3000/recipies";
const ul = document.querySelector("ul");
const templete = document.querySelector("template");
const modal = document.getElementById("modal");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recipies) => {
    updateUI(recipies);
  })
  .catch();

function updateUI(recipies) {
  recipies.forEach((recipe) => {
    const clone = templete.content.cloneNode(true);
    const image = clone.querySelector("img");
    const h3 = clone.querySelector(".title");
    const p = clone.querySelector(".cookingTime");
  

    image.src = recipe.imageUrl;
    image.width = 500;

    h3.textContent = recipe.title;
    p.textContent = recipe.cookingTime;
    ul.appendChild(clone);
  });
}
