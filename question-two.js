//2) Escreva um programa que verifique, em uma string, a existência da letra 'a', seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

/**
 * Verifica a ocorrência da letra 'a' (maiúscula ou minúscula) em uma string.
 *
 * @param {string} texto - A string a ser verificada.
 * @returns {string} Uma mensagem indicando se a letra 'a' foi encontrada e quantas vezes.
 */
function checkLetterA(texto) {
  // Expressão regular para encontrar 'a' ou 'A'
  const regex = /a/gi;

  // Conta o número de ocorrências
  const occurrences = (texto.match(regex) || []).length;

  if (occurrences > 0) {
    return `A letra 'a' foi encontrada ${occurrences} vez(es) na string.`;
  } else {
    return "A letra 'a' não foi encontrada na string.";
  }
}

/**
 * Cria uma interface de leitura/escrita para interação com o usuário.
 *  Esta constante utiliza o módulo 'readline' do Node.js para criar
 * uma interface que permite ler entrada do usuário (stdin) e escrever saída (stdout).
 * Isso possibilita a interação com o usuário através do console.
 */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Digite uma string para verificar a ocorrência da letra 'a': ",
  (textoInformado) => {
    console.log(checkLetterA(textoInformado));
    readline.close();
  }
);
