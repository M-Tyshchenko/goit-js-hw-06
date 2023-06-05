function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getAmount(event) {
  event.target.value;
  console.log(event.target.value);
  return event.target.value;
}

function destroyBoxes() {
  boxArea.innerHTML = '';
}


const inputArea = document.querySelector('input');
const boxArea = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let amount = 0;
const boxesArr = [];

console.log(inputArea);
console.log(boxArea);
console.log(createBtn);
console.log(destroyBtn);

amount = inputArea.addEventListener('input', getAmount);
console.log(amount)
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


//------------------------------------------------------------

function createBoxes(amount) {
 
  let box = document.createElement("div");
  //console.log(box);
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  boxesArr.push(box);
  

  if (amount > 1) {
    for (let i = 0; i <= amount; i += 1) {
      box = document.createElement("div");
      box.style.width += "10px";
      box.style.height += "10px";
      box.style.backgroundColor = getRandomHexColor();
      boxesArr.push(box);
    }
  }
  boxArea.append(...boxesArr)
  boxesArr.splice(0, boxesArr.length);
  
}



//------------------------------------------------------------

//inputArea.addEventListener('input', (event) => event.currentTarget.value);

