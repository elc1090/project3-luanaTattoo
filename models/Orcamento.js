const mongoose = require('mongoose');

const OrcamentoSchema = new mongoose.Schema({
    tatuador_id:{
        type:String,
        required:true,
    },
    preco_local_braco:{
        type:Number,
        required:false,
    },
    preco_local_mao:{
        type:Number,
        required:false,
    },
   
    preco_local_torax:{
        type:Number,
        required:false,
    },
    
    preco_local_cabeca:{
        type:Number,
        required:false,
    },
    preco_local_costas:{
        type:Number,
        required:false,
    },
    preco_local_perna:{
        type:Number,
        required:false,
    },
    preco_local_pe:{
        type:Number,
        required:false,
    },
   
    tamanho:{
        type:Number,
        required:true,
    },
    cor:{
        type:String,
        required:true,
    },
    


});

const Orcamento = mongoose.model("orcamento",OrcamentoSchema);
module.exports = Orcamento;