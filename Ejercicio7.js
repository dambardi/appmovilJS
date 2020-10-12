var numeros = [2,-3,9];

var resultado = numeros.some(hayAlgunNegativo);

function hayAlgunNegativo(x){
    return x < 0;
}

console.log(resultado);
