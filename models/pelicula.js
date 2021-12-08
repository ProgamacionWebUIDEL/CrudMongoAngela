var mongoose=require('mongoose');
Schema=mongoose.Schema;

var peliculaSchema=new mongoose.Schema({
    Nombre:{type:String},
    Ano_estreno:{type:Number},
    Idioma:{type:String},
    Productor:{type:String}
});
var pelicula= mongoose.model('pelicula',peliculaSchema);
module.exports=pelicula;

