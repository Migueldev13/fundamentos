//expressoes-function.js

//*** Declaracao de funcao ***//

// function minhaFuncao(parametro){
//    bloco de codigo
// }
//chamando a funcao pelo nome, a gente chama-a passando um parametro necessario para ela, seja: string, numero, ou ate mesmo outra funcao. 
// minhaFuncao("parametro")

//******************************************************************************************************************************************//

//*** Expressoes de funcao (é uma outra forma de escrever funcao em javascript) a gente comeca criando uma const, criando um nome pra ela, daí sim a gente atribui uma funcao para ela. Na expressao de funcao a gente nao tem um nome da funcao pois a gente cria uma variavel que neste caso é uma const(é importante ser const  para a gente nao acabar colocando um valor dentro dela e apagando a nossa funcao no meio do codigo) nomeia- a e atribui à funcao  ***.

// const soma = function (num1, num2)  {return num1 + num2}
// console.log(soma(1,1))


//*** Diferenca principal ***// Hoisting = içar/ levantar/ elevar/ guindar: traducoes 
// Funcoes e var sao "listados" no topo do arquivo.

// console.log(apresentacao())

// function apresentacao(){
//     return "ola"
// } 
// esse comando retornará ola mesmo com o console.log colocado em cima do bloco da funcao

// Outro exemplo...

console.log(soma(1,2))
const soma = function(num1, num2) { return num1 + num2}
// esse comando retornara um erro de referencia, dirá que nao consegue acessar "soma" antes da inicializacao, ou seja  quando a gente faz uma declaracao de soma com const, ela se comporta como uma variavel, e como uma variavel no js a gente nao pode usar ela, a menos que  a gente ja tennha passado por ela, ou seja iniciado ela alguma vez. Exceção: caso das funcoes que a gente declara com o nome. ou as Var. Nestes casos os interpretador do js passara pelos nossos codigos e puxara todas essas declaracoes para o topo do nosso codigo.  