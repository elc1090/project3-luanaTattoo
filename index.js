const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const FoodModel = require("./models/Food");
const UserModel = require("./models/Usuario");
const TatuadorModel = require("./models/Tatuador");
const OrcamentoModel = require("./models/Orcamento");
const CategoriaModel = require("./models/Categoria");

require('dotenv').config();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://luana:fodase@cluster0.kqt2v3y.mongodb.net/crudTest?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
});

app.post('/insert',async (req,res)=>{
    const foodName = req.body.foodName;
    const days = req.body.days;
    const food = new UserModel({name:foodName,age:days});

    try{
        await food.save();
    }catch(err){
        console.log(err);
    }
});


app.get('/read',async (req,res)=>{
    try{
        const resultado = await FoodModel.find();
        res.send(resultado);
    }catch(err){
        res.send(err);
    }
});


app.get('/userlist',async (req,res)=>{
    try{
        const resultado = await UserModel.find();
        res.send(resultado);
    }catch(err){
        res.send(err);
    }
});


app.get('/tatuadorlist',async (req,res)=>{
    try{
        const resultado = await TatuadorModel.find();
        res.send(resultado);
    }catch(err){
        res.send(err);
    }
});

app.get('/categorialist',async (req,res)=>{
    try{
        const resultado = await CategoriaModel.find();
        res.send(resultado);
    }catch(err){
        res.send(err);
    }
});

/*
//faz a requisicao uma vez e guarda a info 
app.get('/tatuador',async (req, res, next)=>{
    const nome = req.params.name;

    try{
        const resultado = await TatuadorModel.find({name: nome}, function (err, docs) {
            res.json({length: docs.length, records: docs});
        });        
        res.send(resultado);
    }catch(err){
        res.send(err);
    }

});
*/


app.post('/userform/insert', async (req,res) =>{
    const nome = req.body.name;
    const idade = req.body.age;
    const email = req.body.email;
    const senha = req.body.senha;
    const user = new UserModel({name:nome,age:idade,email:email,senha:senha});
    try{
        await user.save();
        console.log(user);
    }catch(err){
        console.log(err);
    }

});

app.post('/tatuadorform/insert', async (req,res) =>{
    const nome = req.body.name;
    const idade = req.body.age;
    const cidade = req.body.city;
    const email = req.body.email;
    const senha = req.body.senha;
    const categoria = req.body.categoria;
    const perfil = req.body.foto_perfil;
    const exemplo1 = req.body.foto_exemplo1;
    const exemplo2 = req.body.foto_exemplo2;
    const exemplo3 = req.body.foto_exemplo3;
    const exemplo4 = req.body.foto_exemplo4;

    const user = new TatuadorModel({name:nome,age:idade,city:cidade,email:email,senha:senha,categoria:categoria,foto_perfil:perfil,foto_exemplo1:exemplo1,foto_exemplo2:exemplo2,foto_exemplo3:exemplo3,foto_exemplo4:exemplo4});
    try{
        await user.save();
        console.log(user);
    }catch(err){
        console.log(err);
    }

});



app.post('/orcamento/insert', async (req,res) =>{
    const braco = req.body.preco_local_braco;
    const perna = req.body.preco_local_perna;
    const torax = req.body.preco_local_torax;
    const costas = req.body.preco_local_costas;
    const cabeca = req.body.preco_local_cabeca;
    const mao = req.body.preco_local_mao;
    const pe = req.body.preco_local_pe;
    const tamanho = req.body.tamanho;
    const cor = req.body.cor;

    const user = new OrcamentoModel({preco_local_braco:braco,preco_local_perna:perna,preco_local_torax:torax,preco_local_mao:mao,preco_local_pe:pe,preco_local_costas:costas,preco_local_cabeca:cabeca,tamanho:tamanho,cor:cor});
    try{
        await user.save();
        console.log(user);
    }catch(err){
        console.log(err);
    }

});


function createCategorias(){
    const map = new Map();
    map.set('1',"Black Work","https://i.pinimg.com/originals/61/3a/66/613a666a9d308f1605b522bbf52b8a0d.jpg");
    map.set('2',"Old School","https://www.fashionbubbles.com/files/2017/05/tatuagens-old-school-3-600x389.jpg");
    map.set('3',"Fine Line","https://boadicadebeleza.com.br/wp-content/uploads/2023/01/fineline-tattoo.jpeg");
    map.set('4',"Pontilhismo","https://blog.pajaris.com.br/wp-content/uploads/2020/06/Tatuagem-pontilhismo-_0002_Camada-39.jpg");
    map.set('5',"Geometrica","https://fotostatuagens.com/wp-content/uploads/2018/04/fechado.jpg");
    map.set('6',"Oriental","https://cdntattoofilter.com/tattoo/22329/l.jpg");
    map.set('7',"Realista","https://amotatuagem.com/wp-content/uploads/2018/06/tatuagens-realistas-2.jpg");
    map.set('8',"Maori","https://www.elhombre.com.br/wp-content/uploads/2019/03/449c935c-49ce-681a-b4fe-5aaf3e01b0b5-600x594.jpg");
    map.set('9',"Aquarela","https://i2.wp.com/www.depoisdosquinze.com/app/uploads/2014/04/tatuagens-aquarela-02.jpg?resize=700%2C700&ssl=1");
    map.set('10',"Minimalista","https://i.pinimg.com/originals/0c/09/93/0c09930be705d58f3db5da783c92437f.png");

}


app.post('/categoria/insert', async (req,res) =>{
    
    const name = req.body.name;
    const img = req.body.img;

    const categ = new CategoriaModel({name:name,img:img});
    try{
        await categ.save();
        console.log(user);
    }catch(err){
        console.log(err);
    }

});


app.post('/orcamento',async (req,res)=>{
    const name = req.body.name;
    const tamanho = req.body.tamanho;
    const cor = req.body.cor;
    const local = req.body.local;

//logica para calcular o orcamento

});

app.get('/categoria', async(req,res)=>{
    
    var query = require('url').parse(req.url,true).query;
    const nome = query.categoriaName;

    try{
        const resultado = await TatuadorModel.find({"categoria": nome});   
        res.send(resultado);
    }catch(err){
        res.send(err);
    }

});


app.get('/tatuador', async(req,res)=>{
    
    var query = require('url').parse(req.url,true).query;
    const nome = query.tatuadorName;
    try{
        const resultado = await TatuadorModel.find({"name": nome});   
        res.send(resultado);
    }catch(err){
        res.send(err);
    }

});


const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`Server is running on port ${PORT}`);
});


