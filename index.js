let soma1 = soma(10, 20);
let soma2 = soma(40, 23);
let resultado = soma(soma1, soma2);

console.log(resultado);



function soma(a, b){
    let resultado = a + b;
    return resultado;
}

const somaDois = (a, b) => a + b;
console.log(somaDois(199.3, 120));


var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for (let i= 0; i < 10; i++){
    total += numeros[i];
}
console.log(total/10);

total = 0;

for (let i = 0; i < numeros.length; i++){
    total = total + numeros[i]; 
}

console.log(total/numeros.length);


function numeroPrimo(n){
    if (n < 2) return false;
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
}

const numerosPrimos = numeros.filter(numeroPrimo);

console.log(numerosPrimos);


function numeroPar(n){
    if (n % 2 === 0) return true;
    else return false;
}

if (numeroPar(somaDois(3, 2))){
    console.log('Par');
} else console.log('Impar');



function fibonacci(n){
    if (n <= 1) return n;

    let a = 0;
    let b = 1;
    let resultado;

    for (let i = 2; i <= n; i++){
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return resultado;
}

console.log(fibonacci(4));

const dobrarArray = numeros.map(num => num * 2);
console.log(dobrarArray);

const somaArray = numeros.reduce((total, num) => total + num, 0);
console.log(somaArray);

const pessoa = {
    nome: 'Ramon',
    idade: 35,
    altura: 1.90,
    peso: 55,
    falar: function(){
        console.log('Olá');
    }
};
console.log(pessoa.nome);
console.log(pessoa.falar());


class Pessoa{
    constructor(nome, idade, altura, peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

let pessoa1 = new Pessoa('Ramon', 35, 1.90, 55);
let pessoa2 = new Pessoa('Vick', 17, 1.30, 19);
let pessoa3 = new Pessoa('Mago', 312, 2.10, 100);

pessoa1.nome = 'Cristhian';

console.log(pessoa1.nome, 'não gosta do', pessoa3.nome);


function revelaNome (){
    const nome = document.getElementById('meuNome');
    nome.innerHTML = 'Mago';
    nome.style.backgroundColor = '3rem';
}



const form = document.getElementById('formulario');
const erro = document.getElementById('erro');

form.addEventListener('submit', (event) =>{
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (name.length < 5){
        erro.innerHTML = 'Nome inválido, o nome precisa ter mais do que 3 caracteres';
        event.preventDefault();
    } else if ( !email.includes("@")){
        erro.innerHTML = 'Email inválido';
        event.preventDefault();
    }
});

