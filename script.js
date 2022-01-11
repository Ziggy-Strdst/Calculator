let active = 1;

const sum = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
const operate = function (op, a, b) {
  a = Number(a);
  b = Number(b);
  if (op === "+") {
    result = sum(a, b);
    inputEl.value = result;
    return result;
  } else if (op === "-") {
    result = subtract(a, b);
    inputEl.value = result;
    return result;
  } else if (op === "*") {
    result = multiply(a, b);
    inputEl.value = result;
    return result;
  } else if (op === "/") {
    if (b === 0) {
      return (inputEl.value = "FUCK OFF");
    }
    result = divide(a, b);
    inputEl.value = result;
    return result;
  }
};

//
const inputEl = document.getElementById("input");
const equalBtn = document.getElementById("equal");
const cancelBtn = document.getElementById("cancel");
const numberBtns = document.querySelectorAll("[data-num]");
const operatorBtns = document.querySelectorAll("[data-oper]");

let curNumber = "";
let number = "";
let oper = "";
inputEl.value = "0";

numberBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    curNumber += btn.dataset.num;
    inputEl.value = curNumber;
  })
);

operatorBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (!curNumber || !number) {
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

equalBtn.addEventListener("click", function () {
  curNumber = operate(oper, number, curNumber);
  number = "";
});

cancelBtn.addEventListener("click", function () {
  curNumber = "";
  number = "";
  oper = "";
  inputEl.value = "0";
});
