// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

/**
 * Verifica se um número pertence à sequência de Fibonacci.
 *
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Uma mensagem indicando se o número pertence ou não à sequência de Fibonacci.
 */
function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  // Verifica casos especiais: 0 e 1
  if (numero === 0 || numero === 1) {
    return `${numero} pertence à sequência de Fibonacci.`;
  }

  // Gera a sequência de Fibonacci até encontrar ou ultrapassar o número
  while (b <= numero) {
    if (b === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }

  // Se o loop terminar sem encontrar o número, ele não pertence à sequência
  return `${numero} não pertence à sequência de Fibonacci.`;
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
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (numeroInformado) => {
    console.log(verificaFibonacci(parseInt(numeroInformado)));
    readline.close();
  }
);
