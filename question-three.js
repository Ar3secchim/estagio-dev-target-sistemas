// 3) Observe o trecho de código abaixo:
// int INDICE = 12, SOMA = 0, K = 1;
// enquanto K < INDICE faça {
//     K = K + 1;
//     SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

/**
 * Calcula o valor final da variável SOMA conforme o algoritmo descrito.
 *
 * @returns {number} O valor final da variável SOMA.
 */
function calculateSum() {
  let INDEX = 12;
  let SUM = 0;
  let K = 1;

  while (K < INDEX) {
    K = K + 1;
    SUM = SUM + K;
  }

  return SUM;
}

const resultadoSoma = calculateSum();
console.log(`O valor final da variável SOMA é: ${resultadoSoma}`);
