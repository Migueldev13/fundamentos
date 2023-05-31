// uso classico do if 

// const idadeMinima = 18;
// const idadeCliente = 16;

// if (idadeCliente >= idadeMinima){
//     console.log("cerveja")
// }else{
//     console.log("suco")
// }
//Desse formato com o idadeCliente = 16, tem que voltar suco
//mudando a idadeCliente para 18 ou mais, tem que voltar cerveja 


//usando o operador ternario 

const idadeMinima = 18;
const idadeCliente = 16;

            //condição/comparação        //saida do nosso console que irá retornar verdadeiro ou falso(nesse caso, cerveja ou suco)
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
                                           //true     //false

//Desse formato com o idadeCliente = 16, tem que voltar suco
//mudando a idadeCliente para 18 ou mais, tem que voltar cerveja 


// * uma boa pratica, tentar usar o ternario com operaçōes curtas, pois com operaçōes muito grandes pode se tornar dificil de ler o codigo.