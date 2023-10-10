const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const array = ingredients.map(el => {
  
  const item = document.createElement("li")
  item.classList.add("item"); 
  item.innerHTML = el;
  return item
})

list.prepend(...array)
console.log(list);
