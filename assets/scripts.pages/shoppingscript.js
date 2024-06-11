const quantity5 = document.querySelector ('.number')
const quantityIncreaser = document.getElementsByClassName ('plus')
const quantityDecreaser = document.getElementsByClassName ('minus')
const blueDiv = document.querySelector('.blue')
console.log(quantity5);


const new_div = document.createElement ('div')
const buttonePlus =document.createElement ('button')
const buttoneMinus =document.createElement ('button')

new_div.classList.add('color')
buttonePlus.classList.add('plus')
buttoneMinus.classList.add('minus')

blueDiv.appendChild(new_div)
blueDiv.appendChild(buttonePlus)
blueDiv.appendChild(buttoneMinus)

new_div.style.backgroundColor = 'blue'
new_div.style.width = '150px'
new_div.style.height = '200px'
new_div.textContent = 'Amount'

buttonePlus.textContent = 'Press for +'
buttoneMinus.textContent = 'Press for -'
quantity5.textContent = "0"
buttonePlus.style.color='black'
buttoneMinus.style.color='black'




let sum = 0;

buttonePlus.addEventListener('click',function(){
    sum++;
    quantity5.textContent = sum;
}
)

function forDecrease(){
    sum--;
    quantity5.textContent=sum;
}
buttoneMinus.addEventListener('click',forDecrease)

