// Seleciona os elementos do HTML
const totalBillInput = document.getElementById("total-bill");
const serviceQualityInput = document.getElementById("service-quality");
const numPeopleInput = document.getElementById("num-people");
const calculateBtn = document.getElementById("calculate-btn");
const totalResult = document.getElementById("total-result");
const totalPerPersonResult = document.getElementById("total-per-person");
const tipAmountResult = document.getElementById("tip-amount");
const tipPerPersonResult = document.getElementById("tip-per-person");

// Define a função para calcular a gorjeta
function calculateTip() {
  // Pega os valores dos inputs
  const totalBill = parseFloat(totalBillInput.value);
  const serviceQuality = parseFloat(serviceQualityInput.value);
  const numPeople = parseFloat(numPeopleInput.value);

  // Verifica se os inputs foram preenchidos corretamente
  if (isNaN(totalBill) || isNaN(serviceQuality) || isNaN(numPeople)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Calcula o total da gorjeta
  let tipAmount = totalBill * serviceQuality;

  // Calcula o total da conta
  let total = totalBill + tipAmount;

  // Calcula o total por pessoa
  let totalPerPerson = total / numPeople;

  // Calcula a gorjeta por pessoa
  let tipPerPerson = tipAmount / numPeople;

  // Exibe os resultados na página
  totalResult.innerText = total.toFixed(2);
  totalPerPersonResult.innerText = totalPerPerson.toFixed(2);
  tipAmountResult.innerText = tipAmount.toFixed(2);
  tipPerPersonResult.innerText = tipPerPerson.toFixed(2);
}

// Define o evento de clique do botão de cálculo
calculateBtn.addEventListener("click", calculateTip);

