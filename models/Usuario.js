const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
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
    /*
    orcamentos_id:{
        type:Array,
        required:false,
    },
    */

});

const Usuario = mongoose.model("usuario",UsuarioSchema);
module.exports = Usuario;