// * Concatenação normal
// const nome = "miguel";
// const apresentacao = "meu nome é " + nome;
// console.log(apresentacao)
//Vai voltar 'meu nome é miguel' 


// * Concatenação com uma string bem maior, mas com o mesmo sentindo e função da Concatenação menor
// const nome = "miguel";
// const idade = 2023 - 1991;
// const cidadeDeNascimento = "Rio de janeiro"

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + ", eu nasci no " + cidadeDeNascimento;
// console.log(apresentacao)




//resolvendo a mesma operação anterior com o uso da Template string 


const nome = "miguel";
const idade = 2023 - 1991;
const cidadeDeNascimento = "Rio de janeiro"
const apresentacao = `meu nome é ${nome}, minha idade é ${idade}, e eu nasci no ${cidadeDeNascimento}`;

console.log(apresentacao)