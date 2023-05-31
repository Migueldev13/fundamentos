//1st exemplo:
//const numero;  
//SyntaxError: (o erro volta apontando um erro na const numero, entao a gente sabe o que o problema ta ali. Agora devemos investigar qual é o problema encontrado, que no caso seria um syntaxerror: neste erro esta dizendo que esta faltando um iniciador, ou seja esta faltando um numero pra poder declarar uma constante. No caso da const o iniciador é o valor passado à ela.



//2nd exemplo:
// const numero = 1;
// console.log(numero
// SyntaxError: ( o erro volta apontando um parenteses não fechado na lista de argumento)



//3rd exemplo
const numero = 1;
console.log(minhaVar)
// ReferenceError (agora é um erro de referencia, ou seja a nossa liguagem de programação não conseguiu achar a variavel que a gente esta pedindo, dentro do codigo): ( o erro volta apontando que a variavel minhaVar não está definida em lugar nenhum)



// 4th exemplo
// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.



// 5th exemplo
// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.