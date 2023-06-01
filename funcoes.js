// Function são trechos de codigo que a gente separa em declaração que a gente manda chamar
//function nomeDaFuncao (parametro){ e o que ela tem que fazer }, essa é a base de uma  função.

//declaracao   *Nome        *Parametro   * o que a gente deseja que seja executado
// function       nomeDaFuncao (parametro){ e o que a gente deseja que seja executado}
//*chmando a função
//nomeDafuncao(parametro)



//----------------------//--------------------//

// let x = "";
// console.log(x)
// x = "oi"

 // * essa é chamada de declaração de função, essa é a forma mais classica.
//  function imprimeTexto(texto){
//     console.log(texto)
// }
// imprimeTexto()

// a função tem dois momentos 
// o primeiro momento é quando a gente declara a função ditando o que fazer.  
// o segundo momento é quando a gente executa a função uma ou mais vezes. 
//(lembrando que a gente usa a função para que um pedaço de codigo seja somente executado no momento que a gente quer)
// como a gente executa a função? chamando ela pelo nome e entre () a gente diz qual é o parametro que a gente quer que seja impresso/executado.



                     //string
// function imprimeTexto(texto){
//     console.log(texto)
// }

// imprimeTexto("oi"); // esse é o momento que eu pedi para o JavaScript, chamando a função pelo nome, e passando pra dentro dela entre () o parametro que eu quero que seja exebido no console 
// uma coisa muito importante da função é que ela pode ser reaproveitada com o mesmo nome usando varios parametros 

// function imprimeTexto(texto){
//     console.log(texto)
// }

// imprimeTexto("oi");
// imprimeTexto("outro texto");

// isso me retornaria dois textos com o mesmo nome da função. 

// * uma função pode ser criada sem parametro que é o que fica dentro dos ().

// function soma (){
//     return  2 + 2;
// } 
// se eu quiser executar a função eu preciso chama-la pelo nome e mesmo que não tenha nenhuma informação dentro dos () eu preciso chama-la para que o js possa entender que eu estou chamando-a .  

//  console.log(soma ())

 // * lembrando que o return tem que ser a ultima linha da função antes de fechar o bloco ( nao é proibido escrever depois da linha do return mas a linha dps sera executada) 



//  As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

//  Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
 
//  Math.round(4.3) retorna 4
//  Math.round(3.85) retorna 4
//  Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
//  Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
 
//  Math.ceil(5.2) retorna 6
//  Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
 
//  Math.floor(5.2) retorna 5
//  Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
 
//  Math.trunc(4.3) retorna 4
//  Math.trunc(4.8) retorna 4
//  Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
 
//  Math.pow(4 , 2) retorna 4^2 = 16
//  Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
//  Math.sqrt() : Retorna a raiz quadrada de um número.
 
//  Math.sqrt(64) retorna 8
//  Math.min(): Retorna o menor valor entre os argumentos.
 
//  Math.min(0, 150, 30, 20, -8, -200) retorna -200
//  Math.max(): Retorna o maior valor entre os argumentos.
 
//  Math.max(0, 150, 30, 20, -8, -200) retorna 150
//  Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
 
//  Math.random() retorna 0.7456916270759015
//  Math.random() retorna 0.15449802102729304
//  Math.random() retorna 0.4214269561951203


//Para ver mais funções matemáticas, basta acessar a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description

