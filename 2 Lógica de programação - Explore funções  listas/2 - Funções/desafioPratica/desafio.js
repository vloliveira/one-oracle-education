// Criar uma função que exibe "Olá, mundo!" no console.

//Esta é uma função  IIFE (Expressão de Função Imediatamente Invocada), por isso é envolvida por () e no final tem outro () que indica que ela deve ser executada imeditamente.
//Não é global, só executada ali mesmo e imediatamente.

(function () {
  console.log("Olá");
})();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome() {
  const nome = document.querySelector("input").value;
  document.querySelector("input").value = "";
  console.log(`Olá ${nome}`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//Extra: limpar o input após enviar
function dobro() {
  const num = document.getElementById("num").value;
  let resultado = num * 2;
  document.getElementById("num").value = "";
  console.log(resultado);
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
//Extra: limpar o input após enviar
function media() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  const resultado = (num1 + num2 + num3) / 3;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("num3").value = "";
  console.log(resultado);
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//Extra: limpar o input após enviar

function maior() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);

  if (numero1 > numero2) {
    console.log(numero1);
  } else {
    console.log(numero2);
  }
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
//Extra: limpar o input após enviar

function multiplicar() {
  const numero = parseInt(document.getElementById("numero").value);
  const result = numero * numero;
  console.log(result);
  document.getElementById("numero").value = "";
}
