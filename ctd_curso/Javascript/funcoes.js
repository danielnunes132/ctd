// funcao declarada
function darOi(){
    console.log("Olá, tudo bem?");
}
darOi();



// funcao expressa
let somar = function(){
    console.log(1 + 10);    
}
somar();

// funcao expressa
let somar2 = function (numA, numB) {
    return numA + numB;    
}
somar2(1245,87564);
console.log(somar2(3, 9));

function funcaoMultiplicar (numA, numB) {
    let resultado = numA * numB;
}

// console.log(resultado);

// escopo
let resultado = 0;
console.log("Resultado fora da Função = ", resultado);

function multiplicaN(numA, numB) {
    let resultado = numA * numB;
    console.log("Resultado dentro da Função = ", resultado);

}
resultado = 476;
console.log(resultado);
multiplicaN(2, 2);
resultado = 9;
console.log(resultado);
