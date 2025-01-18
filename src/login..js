// Calculadora
let input1 = "";
let input2 = "";
let operacao = "";

const display = document.getElementById("display");

function atualizarDisplay(value) {
  display.value = value;
}

//  limpar o display da calculadora
function clearDisplay() {
  input1 = "";
  input2 = "";
  operacao = "";
  atualizarDisplay("");
}

// função para o evento de click em cada botão da calculadora
const buttons = document.querySelectorAll(".grid button");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = function () {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      input1 += value;
      atualizarDisplay(input1);
    }
  };
}

// operadores declaração
document.getElementById("soma").onclick = function () {
  operacao = "+";
  input2 = input1;
  input1 = "";
};
document.getElementById("subtracao").onclick = function () {
  operacao = "-";
  input2 = input1;
  input1 = "";
};
document.getElementById("multiplicacao").onclick = function () {
  operacao = "×";
  input2 = input1;
  input1 = "";
};
document.getElementById("divisao").onclick = function () {
  operacao = "÷";
  input2 = input1;
  input1 = "";
};
document.getElementById("percentual").onclick = function () {
  operacao = "%";
  input2 = input1;
  input1 = "";
};

document.getElementById("resultado").onclick = function () {
  if (input1 && input2 && operacao) {
    let result;
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operacao) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num2 - num1;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "÷":
        result = num2 / num1;
        break;

      case "%":
        result = (num1 * num2) / 100;
        break;
    }

    console.log("O valor do Input1 é:", input2, "O valor do Input2 é:", input1, "A operação selecionada é:", operacao, "O resultado final é", result);

    atualizarDisplay(result);
    input1 = result.toString();
    input2 = "";
    operacao = "";
  }
};

document.getElementById("clear")?.addEventListener("click", clearDisplay);


