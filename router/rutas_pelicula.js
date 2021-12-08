const express=require('express'),
      router=express.Router(),
      pelicula=require('../controllers/controlerPelicula');

router.use('/pelicula',pelicula);
module.exports=router;
