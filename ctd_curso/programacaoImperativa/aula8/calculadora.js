function adicionar(num1,num2){
    return num1+num2;
}

function subtracao(num1,num2){
    return num1-num2;
}

function multiplicacao(num1,num2){
    return num1*num2;
}

function divisao(num1,num2){
    return num1/num2;
}

console.log("Testando Calculadora:" + "\nSoma 23 + 17= " + adicionar(23,17) +"\nSubtração 2 - 1= " + subtracao(2,1) + "\nMultiplicação 2 * 2= "+ multiplicacao(2,2) + "\nDivisão 5 / 5= " + divisao(5,5));
console.log(divisao(8,0));

function quadradoDoNumero(num){
    return multiplicacao(num,num)
}
console.log("testando quadrado 2^2 "+quadradoDoNumero(2));

function mediaDeTresNumeros(num1,num2,num3){
    let total = num1+num2+num3;
    return divisao(total,3);
}
console.log("Testando Função Média "+ mediaDeTresNumeros(3,3,3));


function calculaPorcentagem(num1,num2){
    return num2 * num1/100
}
console.log("Testando porcentagem "+ calculaPorcentagem(15,300));

