//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('./menu/index', {homeProducts: home});
    },
    menu: (req,res) =>{
        res.render('./menu/menu', {categorias : categoria} )
    },
} 


const home = [
    {
        titulo: "Hamburguesa",
        direccion: "/productos/Hamburguesa",
        image:"/img/hamburguesa2.jpg",
        descripcion:"Disfrute de las mejores Hamburgesas"
    },
    {
        titulo: "Parrilla",
        direccion: "/productos/Asado",
        image:"/img/carneasada.jpeg",
        descripcion:"Especializados en parrilla"
    },
    {
        titulo: "Pizza",
        direccion: "/productos/Pizza",
        image:"/img/pizzas.jpeg" ,
        descripcion:"Postres unicos y originales"
    },
    {
        titulo: "Bebidas",
        direccion: "/productos/Bebidas",
        image:"/img/vino.jpg",
        descripcion:"Bebidas de todo tipo"
    }
]



const categoria = [
    {
        id: "Hamburguesa",
        categoria: 'Hamburguesa',
        image: 'hamburguesa1.jpg',
        textoAlternativo: 'Menu de Hamburguesas',
    },
    {
        id: "Pizza",
        categoria: 'Pizza',
        image: 'pizza.jpeg',
        textoAlternativo: 'Seccion de pizzas',
    },
    {
        id: "Pastas",
        categoria: 'Pastas',
        image: 'ravioles.jpeg',
        textoAlternativo: 'Seccion de Ravioles',
    },
    {
        id: "Empanadas",
        categoria: 'Empanadas',
        image: 'empanadas.jpeg',
        textoAlternativo: 'Seccion de empanadas',
    },
    {
        id: "Asado",
        categoria: 'Asado',
        image: 'carneasada.jpeg',
        textoAlternativo: 'Seccion de Asado',
    },
    {
        id:"Bebidas",
        categoria: 'Bebidas',
        image: 'coctel.jpg',
        textoAlternativo: 'Seccion de bebidas',
    }
]

module.exports =  controllerIndex;