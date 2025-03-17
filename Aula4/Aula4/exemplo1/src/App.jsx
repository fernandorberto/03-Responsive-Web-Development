import Imagem from '../src/assets/img.jpg'

function App() {
  
//DECLARANDO VARIAVEIS
let nome ="Wellington";
let apelido ="Cidade";
let novoNome = nome.toUpperCase();

//CRIANDO FUNÇÃO

function soma(v1,v2){
  return v1 + v2;
}

//ARROW FUNCTION

const subtrair=(v3,v4)=>{return v3 - v4}



  return (


    //FRAGMENT
    <>
      <p>Seja bem vindo ao React {novoNome} {apelido}</p>
      <p>A Soma da função é : {soma(20,9)}</p>
      <p>A Subtração da Arrow Funcion é: {subtrair(50,30)}</p>
      <img src={Imagem} alt="Img bonita" width="500"/>
    </>
   
  
  )
}

export default App
