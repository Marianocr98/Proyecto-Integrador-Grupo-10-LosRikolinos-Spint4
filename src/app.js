/* EXPRESS*/
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('../public'));
/*Middleware que capturta lo que se envia por post */
app.use(express.urlencoded({extended:false}));

/* EJS */ 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* IMPLEMENTACION PARA PUT Y DELETE*/
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/* REQUERIMIENTO DE RUTAS */
const mainRutas = require('./routers/indexRouter');
const rutaUser = require('./routers/userRouter') /*airu*/ 
const products = require('./routers/productsRouter');
const logMiddleware = require('./middlewares/logMiddleware')


/* RUTAS */
app.use('/', mainRutas);
app.use('/', rutaUser) 
app.use('/', products);

app.use(logMiddleware)

/*Server Funcionando*/
app.listen(process.env.PORT || 3050 , ()=>{
    console.log('Servidor funcionando');
});