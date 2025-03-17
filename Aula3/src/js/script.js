//TIPOS DE VARIÁVEIS 

var exemplo ="Ola Dev-var";
console.log(exemplo);

let exemplo1="Ola Dev-let";
console.log(exemplo1)

const exemplo2 ="Ola Dev-const";
console.log(exemplo2)

// VAR
function exemplo4(){
    if(true){
        var f=100;
        console.log("Dentro do bloco if:",f)
    }
    console.log("Dentro do bloco função", f)
}

exemplo4()

// LET

function exemplo5(){
    if(true){
        let z=200;
        console.log("Dentro do bloco if:",z)
    }
    // console.log("Dentro do bloco função", z)
}
exemplo5()

// CONST

const nome ="fiap";
// nome ="cidade";
console.log(nome)


let exemplo3=10;
console.log(typeof exemplo3)

let exemplo6='100';
console.log(typeof exemplo6)

let exemplo7=true;
console.log(typeof exemplo7)

let objeto={};
console.log(typeof objeto)

let array=[];
console.log(typeof array)

//valor undefined
let exemplo8;
console.log(exemplo8)

//valor vazio
let exemplo9 =null
console.log(exemplo9)

//OPERADORES ARITMÉTICOS
 
const a=20;
const b=10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//OPERADORES LÓGICOS

console.log(a < b);
console.log(a > b && b < 5);
console.log(a > b || b > a);
console.log(a == b || b <= a);

//OPERADORES DE COMPARAÇÃO

console.log(a == b);//compara
console.log(a === b);//compara e verifica o tipo da variavel
console.log(a != b); //diferente


//ESTRUTURA CONDICIONAL

// if

if(true){
    console.log("verdadeiro")
}
// if /else

let nome1="fiap";

if(nome1 == "fiap"){
    console.log("Nome Correto")
}else{
    console.log("Nome Errado")
}

//Condição Ternário

let valor2 =100;

let resultado = valor2 == 100 ? "Certo":"Errado";
console.log(resultado)

let produto ="notebook";
const desconto =true;

const preco = produto === "notebook" ? desconto ? 100 :200 : produto === "mouse" ? 30 : 100;
console.log(preco)

let valor3= 51

let resultado1 = valor3 > 50 ? "Maior":valor3 < 50?"menor":"igual";
console.log(resultado1)

//SWITCH

let time ="Corinthians";

switch(time){
    case "Corinthians":
        console.log("Melhor Time")
        break;
    case "SaoPaulo":
        console.log("Não considero melhor time")
        break;
    case "Palmeiras":
        console.log("Não possui Mundial")
        break;
    default:
        console.log("Nunhuma das opcoes")
}



//ESTRUTURA DE REPETIÇÃO

//FOR

 for(let i=7;i<=10;i++){
    console.log("o valor de i é:",i)
 }

 //WHILE

 let c=0;
 while(c <10){
    console.log("o valor de c:" ,c)
    c++;
 }

 let z= 0;

 do{
    console.log("do while", z)
    z++;
 }while(z <10)

//JOGO DE ADVINHAÇÃO

let palpite;
const sorteio = Math.floor(Math.random() * 10) +1;

do{
    palpite =parseInt(prompt("Escolha um numero entre 1 e 10"));
}while(palpite !== sorteio);

alert(`Paranbéns ! Você Acerto o número:${palpite}`)



//FUNÇÕES 

function saudacao(nome){
 console.log("Seja bem vindo", nome)
//  alert(`Seja bem vindo ${nome}`)
}

saudacao("Fiap")

function semafaro(){
    let sinal="amarelo";
    console.log("O semafaro está" ,sinal)
}
semafaro();

//ARROW FUNCTION

const saudacao1=(nome)=> console.log(`ola ${nome}`)
saudacao1("cidade")


//Metodo FILTER

const num=[3,2,7,4,55,62,72,80,91];

const numPares = num.filter(numero=> numero % 2 > 0)
console.log(numPares)

const herois =["Tanus","Home de Ferro","Viuva Negra","Thor","Capitao America"];

const nomeGrande =herois.filter(heroi =>heroi.length >5)
console.log(nomeGrande)


//Metodo MAP

let num2 =[1,2,3,4,5];

const dobro =num2.map(numero =>numero * 2)
console.log(dobro)

const herois1 =[
    {nome:"Thor", arma:"martelo"},
    {nome:"Capitao America",arma:"Escudo"},
    {nome:"Arqueiro",arma:"flechas"}
];
const nome2 = herois1.map(heroi =>heroi.arma);
console.log(nome2)

//Metodo REDUCE

const num3 =[1,20,30,40];

const result = num3.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual;
},0) //valor inicial do acumulador

console.log(result)


const herois2 =["Tanus","Thor","Home de Ferro","Viuva Negra","Thor","Home de Ferro","Tanus","Capitao America","Thor"];

const quantidade =herois2.reduce((contador, heroi)=>{
    contador[heroi]= (contador[heroi] || 0)+1;
    return contador;
},{})//valor inicial é o objeto vazio
console.log(quantidade)


//e-commerce - produtos -Mercado City

//objeto

const produtos =[
    {nome:"Boneco Thor", preco:450},
    {nome:"Boneco Hulk", preco:400},
    {nome:"Boneco ViuvaNegra", preco:300},
    {nome:"Boneco Visao", preco:200},
    {nome:"Boneco HomemFerro", preco:500},
];

const valorCupomDesconto = produtos
.filter((produto)=>produto.preco >300)
.map((produto)=>({...produto, preco: produto.preco * 0.9 }))
.reduce((acumulador, produto)=>acumulador + produto.preco,0);

console.log("O valor dos produtos acima de R$ 300 com 10% de desconto R$",valorCupomDesconto);