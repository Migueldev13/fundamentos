// tipo de dados
// booleanos 



//conversao implicita 
const numbero = 456;
const numberoString = "456";

//console.log(numbero == numberoString)   resultado = true porque == compara o valor 
//console.log(numbero === numberoString)  resultado = false porque === compara valor, e tambem o tipo, por isso deu false 
//console.log(numbero + number0String)    resultado = 456456 porque o js pegou o numero e transformou em uma string, porque se tornou uma concatenação



//conversao explicita
//Number() usado quando quer transformar uma string em numero 
//String() usado quando quer transformar um numero em string

//exemplo
//console.log(numbero + Number(numberoString))   resultado = 912 pela soma de 456+"456" 

// outro jeito de fazer 

// const numbero = 456;
// const numberoString =  Number("456");
//console.log(numbero + numberoString)
