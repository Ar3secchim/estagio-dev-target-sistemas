// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
    return `${numero} pertence à sequência de Fibonacci.`;
  }

  while (b <= numero) {
    if (b === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }

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

/**
 * Esta função utiliza o método 'question' do objeto 'readline' para exibir uma mensagem
 * ao usuário e aguardar sua entrada. Após receber o número, ela:
 * 1. Converte a entrada do usuário para um número inteiro usando parseInt().
 * 2. Chama a função verificaFibonacci() com o número convertido.
 * 3. Exibe o resultado no console.
 * 4. Fecha a interface readline para encerrar o programa.
 */
readline.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (numeroInformado) => {
    console.log(verificaFibonacci(parseInt(numeroInformado)));
    readline.close();
  }
);
