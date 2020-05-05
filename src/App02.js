
function solution(N) {
   const resultado = N % 2 !== 0 ? [0] : [];
  while (resultado.length < N) {
    resultado.push(resultado.length + 1, (resultado.length + 1) * -1);
  }
  return resultado;
}

console.log(solution(4));
