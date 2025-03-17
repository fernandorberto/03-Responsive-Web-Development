import {useState} from 'react'


function Formulario(){

    //HOOK-useState -Maniupula o estado da variavel
    const [nome,setNome] =useState('');
    const [email, setEmail]=useState('');


    //CRIANDO UMA FUNÇÃO handleSubmit

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nome,email)
    }


    return (

        <form onSubmit={handleSubmit}>
            <h1>Formulario</h1>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e)=>{setNome(e.target.value)}}   
            />

            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}   
            />
            <button type="submit">Enviar</button>
            {nome}
            {email}


        </form>
    )
}
export default Formulario