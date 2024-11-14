let idade = 18;

if (idade >= 18){
    console.log("Você é maior de idade");
}else {
    console.log("Você é menor de idade");
}

if (idade > 14  && idade < 18){
    console.log("Você é um adolescente");
} else if (idade >= 0 && idade <= 14){
    console.log("Você é uma criança");
    } else {
        console.log("Você é um adulto");
    }

let contador = 0;   
while (contador > 0){
    console.log(contador);
    contador++;
}

for (let x = 0; x > 0; x++){
    console.log (x);
}

contador = 0;
do{
    console.log(contador);
    contador++;
} while (contador == 0);



let soma1 = soma(10, 20);
let soma2 = soma(40, 23);
let resultado = soma(soma1, soma2);

console.log(resultado);



function soma(a, b){
    let resultado = a + b;
    return resultado;
}
