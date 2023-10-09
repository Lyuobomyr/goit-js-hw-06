
const textInput = document.querySelector("#validation-input");
const data = document.querySelector("input[data-length]");


console.log(data.dataset.length);
console.log(textInput.value.length);

textInput.addEventListener("blur", (event) => {
 
  if(data.dataset.length == textInput.value.trim().length){
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");

  }else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});
