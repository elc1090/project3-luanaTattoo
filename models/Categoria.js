const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    /*
    tatuadores:{
        type:Array,
        required:false,
    },
    */

});

const Categoria = mongoose.model("categoria",CategoriaSchema);
module.exports = Categoria;
