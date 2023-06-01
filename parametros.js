//Parametro de funcao ( os parametros de funcao serve pra que a funcao receba informacoes necessarias para poder executar corretamente )


// function soma (num1, num2 ){
//     return  num1 + num2;
// } 
//pra executar essa funcao a gente chama ela pelo nome, mas como a gente quer ver no console a gente chama o nome da funcao usando o console.log 

// console.log(soma(2,2))
// console.log(soma(12,32))
// console.log(soma(52,22))
// console.log(soma(21,42))

// dessa forma consigo fazer multiplas variacoes, chamando apenas o nome da funcao e dando os parametros  

//******************************************************************************************************//

//parametros vs argumentos 

// precisamos nos atentar na ordem dos parametros, pois nesse caso acima são somas, mas caso seja divisao, subtracao ou ate mesmo uma string ele vai colocar na orgem pedida, que no caso acima a ordem é num1, num2. ou seja essa sera a ordem.

//***EXEMPLO DE UM ERRO DA ORDEM***
// function nomeIdade(nome,idade){
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }
// console.log(nomeIdade(31,"Miguel"))

//Neste caso, voltara para mim "meu nome é 31 e minha idade é Miguel" por isso devemos nos atentar na ordem dos parametros.
 


//outra funcao 

// function soma (num1, num2 ){
//     return  num1 + num2;
// }   

// function multiplica(num1,num2){
//     return num1 * num2; 
// }
// console.log(multiplica(soma(4,5),soma(3,3)))

//o resultado sera a soma de (4+5) * (3+3) que no caso retornara 54 

// no caso se eu nao passar o segundo parametro, (console.log(multiplica(soma(4,5))).) ira me retornar NaN (not a number) pois ira somar 4+5 e irá multiplicar por um numero indefinido ou seja 4+5 = 9 * undefined = NaN
//para evitar que isso aconteça podemos definir um valor padrão para o arugumento, e como a gente faz isso? para definir um valor padrao para esse parametro podemos colocar o numero 1 que no caso da multiplicacao é o valor neutro, ficaria function multiplica(num1 = 1,num2 = 1)

