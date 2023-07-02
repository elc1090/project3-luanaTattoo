const mongoose = require('mongoose');

const OrcamentoSchema = new mongoose.Schema({
    
    tatuador_email:{
        type:String,
        required:true,
    },
    descricao:{
        type:String,
        required:false,
    },
    inspiracao:{
        type:String,
        required:false,
    },
    tamanho:{
        type:Number,
        required:true,
    },
    local:{
        type:String,
        required:false,
    },
    cor:{
        type:String,
        required:true,
    },
    cliente_email:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    preco:{
        type:String,
        required:false,
    },
    

});

const Orcamento = mongoose.model("orcamento",OrcamentoSchema);
module.exports = Orcamento;