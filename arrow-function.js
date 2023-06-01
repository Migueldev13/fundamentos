//arrow-function.js ela veio junto com ES6 e uma nova funcao. Ela deixa nosso codigo bem menor, pois agora podemos declarar tudo em uma linha só, não presica de {} nao precisa de RETURN(Você irá presicar usar return e {} caso tenha mais de uma linha ), ela tbm nao pode ser nomeada, nao tem nem essa possibilidade. sempre vem com uma const e o nome da nossa variavel que iremos usar antes.


//classica function.
function apresentar (parametro){
    return `meu nome é ${parametro}`;   // * podemos usar "strings"  ou `templates` neste caso estamos usando templates. Essa é a forma classica 
}


//** Arrow-Function **/ /
// exemplo 1: nao presica de ()
const apresentaArrow = parametro => `meu nome é ${parametro}`;

// exemplo 2: como eu tenho 2 parametros nessa funcao eu preciso usar ()
const soma = (num1, num2) => num1 +num2; // neste caso eu nao preciso usar o return porque eu só estou passando uma instrucao de uma linha 


//Crinado um arrow function com mais de uma linhja de instrucao 
const omaDeNumeroPequenos = (num1,num2) => {
    if (num1 > 10 || num2 > 10 ){ // aqui sim a gente presica so return porrque quando a gente trabalha com condicionais ou o if ou o else vai retornar. 
    return "somente numeros de 1 à 9"
} else {
    return num1 + num2;
 }   
}



//******************** Tip ******************//
//o arrow function é diferente do operador de "maior ou igual que" que no caso é >= 
// esse sinal é de ou || 


// quando usar cada tipo de funcao, arrow/declaracao/expressao ? 
// arrow function é um jeito rapido e curto de escrever, entao o codigo fica mais curto e isso é uma coisa boa. Ela tambem tem algumas vantagens quando a gente ta mexendo com objetos(coisas para outro curso) mas caso ache que a arrow function é complicada podemos usar a declaracao de funcao.
//Nós podemos usar as 3 funcoes de forma geral, mas precisamos nos atentar com a questao do Hoisting quando a gente faz a declaracao da funcao completa.
 

