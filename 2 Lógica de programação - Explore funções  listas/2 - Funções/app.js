let listaNumSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
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
function mensagemInicial() {
  textoNaTela("h1", "Jogo do número secreto");
  textoNaTela("p", "Escolha um número entre 1 e 10");
}
//Chamamos a função aqui para que ao iniciar a página e reiniciar o jogo possa aparecer
// a mensagem. CHamando ela dentro de alguma função não irá aprecer no reload da página

mensagemInicial();
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu com ${tentativas} ${palavraTentativa}`;
    textoNaTela("h1", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numSecreto) {
      textoNaTela("h1", "O número secreto é menor.");
    } else {
      textoNaTela("h1", "O número secreto é maior");
    }
    tentativas++;
    limparNum();
  }
}

function gerarNumAleatorio() {
  let numEscolhido = parseInt(Math.random() * numLimite + 1);
  let quantidadeElementosLista = listaNumSorteados.length;
  if (quantidadeElementosLista == numLimite) {
    listaNumSorteados = [];
  }
  if (listaNumSorteados.includes(numEscolhido)) {
  } else {
    listaNumSorteados.push(numEscolhido);
    console.log(listaNumSorteados);
    return numEscolhido;
  }
}
function limparNum() {
  chute = document.querySelector("input");
  chute.value = "";
}

//Reinicia todoo jogo sem carregar a página
function reiniciarJogo() {
  numSecreto = gerarNumAleatorio();
  limparNum();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reinicar").setAttribute("disabled", true);
}

// let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// let mensagemTentativa = `Você descobriu com ${tentativas} ${palavraTentativa}`;
// textoNaTela("h1", mensagemTentativa);
