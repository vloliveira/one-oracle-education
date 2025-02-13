let numSecreto = 5;
let tentativas = 1;

//Função com param para alterar o conteúdo do texto dinamicamente
// Os param são alterados quando chamo mais embaixo
//A variável informacao armazena o acesso à tag
// innerHTML vai colocar o texto alterado em informacao

function textoNaTela(tag, texto) {
  let informacao = document.querySelector(tag);
  informacao.innerHTML = texto;
}
//Quando chamar basta colocar o que pretende alterar na sequencia igual no param da função criada
textoNaTela("h1", "Jogo do número secreto");
textoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu com ${tentativas} ${palavraTentativa}`;
    textoNaTela("h1", mensagemTentativa);
  } else {
    if (chute > numSecreto) {
      textoNaTela("h1", "O número secreto é menor.");
    } else {
      textoNaTela("h1", "O número secreto é maior");
    }
    tentativas++;
  }
}

function gerarNumAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

// let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// let mensagemTentativa = `Você descobriu com ${tentativas} ${palavraTentativa}`;
// textoNaTela("h1", mensagemTentativa);
