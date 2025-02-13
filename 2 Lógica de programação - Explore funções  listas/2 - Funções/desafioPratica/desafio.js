// Criar uma função que exibe "Olá, mundo!" no console.

//Esta é uma função  IIFE (Expressão de Função Imediatamente Invocada), por isso é envolvida por () e no final tem outro () que indica que ela deve ser executada imeditamente.
//Não é global, só executada ali mesmo e imediatamente.

(function () {
  console.log("Olá");
})();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome() {
  const nome = document.querySelector("input").value;
  console.log(`Olá ${nome}`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
