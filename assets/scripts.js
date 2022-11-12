/*function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}*/
//Trouxe o valor que aparece na tela "0" pra ser atualizado
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

//Criei 2 const para Adicionar o próximo valor e outro pra subtrair o valor
//a variável "maximocont" é a quantidade limite do contador, o usuario que define o valor pelo prompt

const subtrair = document.getElementsByName("subtrair")[0];
const adicionar = document.getElementsByName("adicionar")[0];
let maximocont = prompt("Digite um valor pra limitar o contador:") - 1;

//Evento que acontece quando clickamos no button "+"
adicionar.addEventListener("click", () => {
  if (currentNumber <= maximocont) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    alert("O contador chegou no limite");
  }
});

//Evento que acontece quando clickamos no button "-"
subtrair.addEventListener("click", () => {
  if (currentNumber >= 1) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    alert("O contador chegou no limite");
  }
});

//REFRESH DA PÁGINA
const btn = document.querySelector("#refresh");
btn.addEventListener("click", () => {
  location.reload();
});
