const principalBox = document.querySelector("#principal");
const interestBox = document.querySelector("#interest");
const compoundedBox = document.querySelector("#compounded");
const timeBox = document.querySelector("#time");
const amountSpan = document.querySelector("#amount");

principalBox.addEventListener("input", updateAmount);
interestBox.addEventListener("input", updateAmount);
compoundedBox.addEventListener("input", updateAmount);
timeBox.addEventListener("input", updateAmount);

function updateAmount() {
  const principal = Number(principalBox.value);
  const interest = Number(interestBox.value);
  const compounded = Number(compoundedBox.value);
  const time = Number(timeBox.value);
  const parenthesis = 1 + (interest * 0.01) / compounded;
  const exponent = compounded * time;
  const amount = principal * parenthesis ** exponent;
  amountSpan.textContent = amount.toFixed(2);
}
