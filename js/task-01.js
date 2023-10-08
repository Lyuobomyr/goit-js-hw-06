const unorderedList = document.querySelector('#categories');
const numberOfCategories = unorderedList.children;
console.log(`Number of categories: ${numberOfCategories.length}`);


const item = document.querySelectorAll('.item')
const categories = item.forEach(item => {
    const categoriesName = item.firstElementChild.innerHTML
    const categoriesElements = item.querySelectorAll("ul li")
    
    console.log(`Category: ${categoriesName}`)
    console.log(`Elements: ${categoriesElements.length}`)

  })
