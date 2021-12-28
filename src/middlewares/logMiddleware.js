const fs = require('fs')

function logMiddleware(req,res,next)  {
    fs.appendFileSync('./ingresosDeUsuarios/log.txt', 'Se ingreso en la pagina ' + req.url)
        
    next();
}

//concatenamos lo que requiere el usuario al ingresar su url que se guardara en log.txt
//Bicho no me borres esto me sirve para entender y no olvidarme NO TOCAR!!



module.exports = logMiddleware 