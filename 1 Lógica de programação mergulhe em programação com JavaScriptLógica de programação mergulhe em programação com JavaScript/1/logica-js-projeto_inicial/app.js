alert("Boas vindas ao nosso site!");

var nome = "Lua";
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;
var mensagemDeErro = "Erro! Preencha todos os campos.";

nome = prompt("Digite seu nome: ");
if (prompt == "") {
  alert(nome);
} else {
  alert(mensagemDeErro);
}

idade = prompt("Digite sua idade:");

if (idade >= 18) {
  alert("Você pode tirar a habilitação!");
}
