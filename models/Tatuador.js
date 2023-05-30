const mongoose = require('mongoose');

const TatuadorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    senha:{
        type:String,
        required:true,
    },
    
    categoria:{
        type:String,
        required:true,
    },
    foto_perfil:{
        type:String,
        required:true,
    },
    foto_exemplo1:{
        type:String,
        required:true,
    },
    foto_exemplo2:{
        type:String,
        required:true,
    },
    foto_exemplo3:{
        type:String,
        required:true,
    },
    foto_exemplo4:{
        type:String,
        required:true,
    },
    /*
    orcamento_id:{
        type:Number,
        required:true,
    },
*/
});

const Tatuador = mongoose.model("tatuador",TatuadorSchema);
module.exports = Tatuador;