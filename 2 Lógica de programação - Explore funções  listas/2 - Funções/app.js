const numSecreto = gerarNumAleatorio();

//Função com param para alterar o conteúdo do texto dinamicamente
// Os param são alterados quando chamo mais embaixo
//A variável informacao armazena o acesso à tag
// innerHTML vai colocar o texto alterado em informacao
function textoNaTela(tag, texto) {
  const informacao = document.querySelector(tag);
  informacao.innerHTML = texto;
}
//Quando chamar basta colocar o que pretende alterar na sequencia igual no param da função criada
textoNaTela("h1", "Jogo do número secreto");
textoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  const chute = document.querySelector("input").value;
  console.log(chute == numSecreto);
}

function gerarNumAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
