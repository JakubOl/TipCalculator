const hero = document.querySelector(".hero");
const billInput = document.querySelector(".bill-value");
const tipPerc = document.querySelectorAll(".tip-values");
const customTipAmount = document.querySelector(".custom");
const numberPeople = document.querySelector(".people-number");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset");
let currentTip = 0;
let currentBill = 0;
let currentPeople = 0;
let tipValue = 0;

tipPerc.forEach((tip) =>
  tip.addEventListener("click", function (e) {
    currentTip = +e.target.id;
  })
);

customTipAmount.addEventListener("change", function () {
  currentTip = +customTipAmount.value;
  customTipAmount.ariaPlaceholder = currentTip;
});

billInput.addEventListener("change", function () {
  currentBill = +billInput.value;
});

numberPeople.addEventListener("change", function () {
  currentPeople = +numberPeople.value;
});

hero.addEventListener("click", function () {
  if (!currentBill || !currentTip || !currentPeople) return;
  tipValue = 0.01 * +currentTip * +currentBill * +currentPeople;
  totalValue = tipValue + currentBill;
  tipAmount.textContent = `$${tipValue.toFixed(2)}`;
  totalAmount.textContent = `$${totalValue.toFixed(2)}`;
});

resetBtn.addEventListener("click", function () {
  currentTip = 0;
  currentBill = 0;
  currentPeople = 0;
  billInput.value = "";
  numberPeople.value = "";
  tipAmount.textContent = `$0.00`;
  totalAmount.textContent = `$0.00`;
});
