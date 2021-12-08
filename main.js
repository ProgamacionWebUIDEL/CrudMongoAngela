const express=require("express");
const app=express();
const index_pelicula=require("./router/rutas_pelicula");
const connection=require("./config/conexion")
//ruteo de APIS
app.use('/',index_pelicula);


app.get("/Hola",(req,res)=>{
    console.log(req.query);
    res.json({mensaje:"Hola"+datos.nombre});
});
app.get("/suma",(req,res)=>{
    var datos=req.query;
    var suma=Number(datos.n1)+Number(datos.n2);
    res.json({mensaje:"La respuesta es"+suma});
});

app.get("/resta", (req, res)=>{

    var datos = req.query;
    var resta = Number(datos.n1)-Number(datos.n2);
    res.json({message : "la respuesta es --> "+resta});
});

app.get("/multiplicacion", (req, res)=>{

    var datos = req.query;
    var multiplicacion = Number(datos.n1)*Number(datos.n2);
    res.json({message : "la respuesta es --> "+multiplicacion});
});

app.get("/division", (req, res)=>{

    var datos = req.query;
    var division = Number(datos.n1)/Number(datos.n2);
    res.json({message : "la respuesta es --> "+division});
});

app.get("/exponencial", (req, res)=>{

    var datos = req.query;
    var exponencial = Number(datos.n1)**Number(datos.n2);
    res.json({message : "la respuesta es --> "+exponencial});
});

app.listen(3000, ()=>{
    console.log("servidor levantado");
});


