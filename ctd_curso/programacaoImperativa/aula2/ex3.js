/* soma 2 inteiros
let valor1 = 10;
let valor2 = 20;
console.log(valor1+valor2);

// soma 1 inteiro e 1 string
let valor3 = "10";
let valor4 = 20;
console.log(valor3+valor4);

// soma uma string e 1 inteiro
let valor5 = "Dez";
let valor6 = 20;
console.log(valor5+valor6);
*/
var cliente1 = {
    nome : "José",
    sobrenome : "da Silva",
    idade : 27,
    peso : 83.5,
    altura : 1.7,
    plano : "Ouro"
};

console.log("O IMC do cliente ", cliente1.nome,"é igual ", cliente1.peso/(cliente1.altura*cliente1.altura));
