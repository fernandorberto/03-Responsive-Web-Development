import {useState,useEffect} from 'react';
import axios from 'axios';

const Produtos = () => {

// DECLARANDO A CHAMADA A API (endepoint)
const API_URL ='http://localhost:5000/produtos';


//HOOK - useState- Manipula o estado da variavel

const [produtos,setProdutos]=useState([]);
const [novoproduto,setNovoProduto]=useState({nome:'', descricao:''});
const [editar,setEditar]=useState(false); 


//MOSTRAR PRODUTOS CADASTRADOS

useEffect(()=>{
    fetchProdutos();
},[]);

const fetchProdutos = async() =>{
    try{
        const response = await axios.get(API_URL);
        setProdutos(response.data);
    }catch(error){
        console.log("Erro ao buscar Produtos", error)
    }
}

//CADASTRAR PRODUTOS

const cadastrarProduto = async ()=>{

    if(!novoproduto.nome || !novoproduto.descricao){
        alert("campo Obrigatório")
        return;
    }
    try{
        const reponse = await axios.post(API_URL, novoproduto);
        setProdutos([...produtos, reponse.data]);
        setNovoProduto({nome:'',descricao: ''})
        setEditar(false);
    }catch(error){
        console.log("Erro ao cadastrar Produto", error)
    }
}



//ALTERAR PRODUTO

const alterarProduto = async ()=>{

    if(!novoproduto.nome || !novoproduto.descricao){
        alert("campo Obrigatório")
        return;
    }
    try{
        const response = await axios.put(`${API_URL}/${novoproduto.id}`, novoproduto);
        setProdutos(produtos.map(produto => produto.id === novoproduto.id ? response.data: produto));
        setNovoProduto({nome:'', descricao: ''})
        setEditar(false);
    }catch(error){
        console.log("Erro ao Alterar Produto", error)
    }
}


//APAGAR PRODUTO

const apagarProduto =async (id)=>{
    try{
        await axios.delete(`${API_URL}/${id}`);
        setProdutos(produtos.filter(produto =>produto.id !== id));
    }catch(error){
        console.log("Erro ao excluir produto", error)
    }
}

//CRIANDO A FUNÇÃO HANDLESUBMIT

const handleSubmit=()=>{
    if(editar){
        alterarProduto();
    }else{
        cadastrarProduto();
    }
}

//CRIANDO A FUNÇÃO DO BOTÃO EDITAR

const handleEditar =(produto)=>{
    setNovoProduto(produto);
    setEditar(false);
}


  return (
    <div>
        <h1>Sistema de Cadastro de Produtos</h1>
        <form>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    id="nome"
                    placeholder='Nome do produto'
                    value={novoproduto.nome}
                    onChange={(e)=>setNovoProduto({...novoproduto, nome: e.target.value})}   
                />
            </div>

            <div>
                <label>Descrição</label>
                <input
                    type="text"
                    id="descricao"
                    placeholder='Descrição do produto'
                    value={novoproduto.descricao}
                    onChange={(e)=>setNovoProduto({...novoproduto, descricao: e.target.value})}  
                />
            </div>
            <button onClick={handleSubmit}>
                {editar ? 'Alterar':'Cadastrar'}        
                Cadastrar
            </button>
        </form>  

        <ul>
            {produtos.map(produto=>(
                <li key={produto.id}>
                <div>
                    <strong>{produto.nome}</strong>{produto.descricao}
                </div>
                <div>
                    <button onClick={()=> handleEditar(produto)}>Editar</button>


                    <button onClick={()=> apagarProduto(produto.id)}>Apagar</button>
                </div>        
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Produtos
