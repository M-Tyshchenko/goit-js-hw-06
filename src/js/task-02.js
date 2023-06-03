const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const ingredientArr = [];

ingredients.forEach((element) => {
const ingredient = document.createElement("li");
  ingredient.className = "item";
  ingredient.textContent = element;
  ingredientArr.push(ingredient);
})

list.append(...ingredientArr);


