function polEmCm(num){
    return num*2.54;
}
console.log("Testando polegada em centimetro: "+ polEmCm(2));

function converteEmUrl(string){
    return (`www.${string}.com.br`);
}
console.log("Testando converte em URL: "+ converteEmUrl("monstronet"));

function fraseComExclamação(string){
    return (`${string}!`);
}
console.log("Testando adiciona exclamação: ",fraseComExclamação("Deu Certo"));

function calcIdadeCachorro(num){
    return num * 7;
}
console.log("Um cachorro de "+ calcIdadeCachorro(2)/7 + " anos tem idade humana equivalente à " + calcIdadeCachorro(2)+ " anos.");

function calculaHoraTrabalho(salario){
    return salario/160;
}
console.log("Recebendo um salário de " + calculaHoraTrabalho(3000)*160 + " R$, a hora de trabalho equivale à " + calculaHoraTrabalho(3000) + " R$.");

function imc(altura, peso){
    return peso/((altura*altura)/10000);
}
console.log(imc(177,90));

function converteEmMaiuscula(string){
    return string.toUpperCase();
}
console.log(converteEmMaiuscula("está maiúscila."))

function qualTipoDeDado(dado){
    return dado
}
console.log(typeof qualTipoDeDado(converteEmMaiuscula("d")))

function calculaCircunferencia(raio){
    return (Math.PI*2)*raio
}
console.log(calculaCircunferencia(2))