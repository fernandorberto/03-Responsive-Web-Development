const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { v4: uuidv4} =require('uuid');

const app=express();

app.use(cors());
app.use(bodyParser.json());

let produtos =[];


//ROTA CADASTRAR
app.post("/produtos",(req,res)=>{
    const {nome,descricao,} =req.body;

    if(!nome || !descricao){
        return res.status(400).json({error: "Campo deve ser obrigatório"});
    }
    const novoProduto ={id: uuidv4(), nome, descricao};
    produtos.push(novoProduto);
    res.status(200).json(novoProduto)

});

//CONSULTAR PRODUTOS

app.get('/produtos',(req,res)=>{
    res.json(produtos)
})


//ROTA ALTERAR
app.put('/produtos/:id',(req,res)=>{
    const produtoId = req.params.id;
    const {nome,descricao,} =req.body;

    if(!nome || !descricao){
        return res.status(400).json({error: "Campo deve ser obrigatório"});
    }
    const produtoIndex = produtos.findIndex(item =>item.id === produtoId);

    if(produtoIndex === -1){
        return res.status(404).json({error: "Produto não encotrado"});
    }
    produtos[produtoIndex] = {id: produtoId, nome, descricao};
    res.status(200).json(produtoIndex)
});

//ROTA DE DELETAR

app.delete('/produtos/:id',(req,res)=>{
    const produtoId = req.params.id;
    const arrayProduto = produtos.length;
    produtos = produtos.filter(item =>item.id !==produtoId)

    if(produtos.length == arrayProduto){
        return res.status(404).json({error: "produto não encontrado"});
    }
    res.status(204).send();
    
})





//EXECUTANDO O SERVIDOR 
const PORT =5000;
app.listen(PORT, ()=>{
    console.log(`Servidor Rodando na porta ${PORT} `);
})

