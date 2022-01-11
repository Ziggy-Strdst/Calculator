"use strict";

const sum = function (a, b) {
  return parseFloat((a + b).toFixed(5));
};
const subtract = function (a, b) {
  return parseFloat((a - b).toFixed(5));
};
const multiply = function (a, b) {
  return parseFloat((a * b).toFixed(5));
};
const divide = function (a, b) {
  return parseFloat((a / b).toFixed(5));
};
const operate = function (op, a, b) {
  a = Number(a);
  b = Number(b);
  if (op === "+") {
    return (inputEl.value = sum(a, b));
  } else if (op === "-") {
    return (inputEl.value = subtract(a, b));
  } else if (op === "*") {
    return (inputEl.value = multiply(a, b));
  } else if (op === "/") {
    if (b === 0) {
      return (inputEl.value = "FUCK OFF");
    }
    return (inputEl.value = divide(a, b));
  }
};

const inputEl = document.getElementById("input");
const equalBtn = document.getElementById("equal");
const resetBtn = document.getElementById("reset");
const numberBtns = document.querySelectorAll("[data-num]");
const operatorBtns = document.querySelectorAll("[data-oper]");
const dotBtn = document.getElementById("dot");
const minusBtn = document.getElementById("minus");

let curNumber, number, oper;
const init = function () {
  curNumber = "";
  number = "";
  oper = "";
  inputEl.value = "0";
};
init();

numberBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    curNumber += btn.dataset.num;
    inputEl.value = curNumber;
  })
);

operatorBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (!curNumber && !number) {
      return;
    } else if (!curNumber || !number) {
      oper = btn.dataset.oper;
      number = curNumber;
      curNumber = "";
    } else if (curNumber && number) {
      number = operate(oper, number, curNumber);
      oper = btn.dataset.oper;
      curNumber = "";
      inputEl.value = number;
    }
    inputEl.value = `${number} ${oper}`;
  })
);

dotBtn.addEventListener("click", function () {
  if (curNumber.includes(".")) return;
  curNumber += ".";
  inputEl.value = `${curNumber}`;
});

minusBtn.addEventListener("click", function () {
  curNumber *= -1;
  inputEl.value = `${curNumber}`;
});

equalBtn.addEventListener("click", function () {
  if (!curNumber || !number) return;
  curNumber = operate(oper, number, curNumber);
  number = "";
});

resetBtn.addEventListener("click", init);
