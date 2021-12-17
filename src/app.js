/* EXPRESS*/
const express = require('express');
const app = express();
app.use(express.static('../public'));

/* EJS */ 
app.set('view engine', 'ejs');
app.set('views', 'views');

/* IMPLEMENTACION PARA PUT Y DELETE*/
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/* REQUERIMIENTO DE RUTAS */
const mainRutas = require('./routers/indexRouter');
const rutaUser = require('./routers/userRouter') /*airu*/ 
const products = require('./routers/productsRouter');


/* RUTAS */
app.use('/', mainRutas);
app.use('/', rutaUser) 
app.use('/', products);


/*Server Funcionando*/
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});