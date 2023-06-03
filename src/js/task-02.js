const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
const ingredient = document.createElement("li");
  ingredient.className = "item";
  ingredient.textContent = element;
  list.append(ingredient);

})



