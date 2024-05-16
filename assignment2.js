let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ops = ["+", "-", "x", "/", "."];
let eq = "";
nums.map((i) => {
  const button = document.createElement("button");
  button.innerHTML = i;
  button.classList.add("numbers");
  button.classList.add("btn");
  button.addEventListener("click", () => onNumberClick(i));
  document.getElementById("nums").appendChild(button);
});
ops.map((o) => {
  const button = document.createElement("button");
  button.innerHTML = o;
  button.classList.add("operator");
  button.addEventListener("click", () => onNumberClick(o));
  document.getElementById("ops").appendChild(button);
});
function onNumberClick(i) {
  eq = eq + i;

  console.log(eq);
  document.getElementById("boldDisp").innerHTML = eq;
}

function calc() {
  console.log(eq);
  eq = eq.replace("x", "*");
  console.log(eval(eq));
  let ans = eval(eq);
  if (ans === undefined) {
    eq = "";
    document.getElementById("boldDisp").innerHTML = eq;
  } else {
    eq = ans;
    document.getElementById("boldDisp").innerHTML = eq;
  }
}

function del() {
  eq = eq.toString().split("").slice(0, -1).join("");
  document.getElementById("boldDisp").innerHTML = eq;
}
function reset() {
  eq = "";
  document.getElementById("boldDisp").innerHTML = eq;
}
let calBtn = document.getElementById("calcBtn");
calBtn.addEventListener("click", () => calc());
let delBtn = document.getElementById("delBtn");
delBtn.addEventListener("click", del);
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);
