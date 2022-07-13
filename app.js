import JSConfetti from 'js-confetti'

import './style.css'
import coinIconUrl from "./assets/icon-coin.png";
import billIconUrl from "./assets/icon-bill.png";

const jsConfetti = new JSConfetti()
const btnCoin = document.getElementById("btn-coin");
const btnBill = document.getElementById("btn-bill");
const walletElement = document.getElementById("wallet");

const  min = Math.ceil(500);
const  max = Math.floor(2500);
const  targetRich = Math.floor(Math.random() * (max - min) + min);
console.log(`targetRich = ${targetRich}`);

function updatSavingMoney(value) {
  const savingMoneyElement = document.getElementById('saving-money');
  const currentValue = parseInt(savingMoneyElement.textContent);

  let newValue = currentValue + value;
  savingMoneyElement.textContent = newValue;

  if (newValue > targetRich) {
    jsConfetti.addConfetti()
  }
}

btnCoin.addEventListener("click", function () {
  let iconElementHtml = `<img src="${coinIconUrl}" />`;
  walletElement.insertAdjacentHTML('beforeend', iconElementHtml);

  updatSavingMoney(10)
});

btnBill.addEventListener("click", function () {
  let iconElementHtml = `<img src="${billIconUrl}" />`;
  walletElement.insertAdjacentHTML('beforeend', iconElementHtml);

  updatSavingMoney(100)
});