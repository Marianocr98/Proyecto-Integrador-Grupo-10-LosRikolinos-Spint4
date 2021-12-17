const path = require('path')

const productController = {

    productos: (req,res) => {
        res.render('./productos/productos' ,{productos:products})
    },

    productDetail: (req, res) => {
        let detalle = products.find( element => element.id == req.params.id); 
        res.render('./productos/productDetail', {detail: detalle});
    },
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    }, 
    create: (req,res)=>{
        res.render('./admin/create');
    },
    productsPizza : (req,res) => {
        res.render('./productos/productPizza',{productPizza : productsPizza})
    },
    productsBebidas : (req,res) => {
        res.render('./productos/bebidas',{drink : productsDrinks })
    },
    productsHamburguer : (req,res) => {
        res.render('./productos/productHamburguer',{productsHamburguer : productsHamburguesa })
    },
    productsAsado : (req,res) => {
        res.render('./productos/productAsado',{asado : productsAsado })
    },
    productsPastas : (req,res) => {
        res.render('./productos/productPastas',{pastas : productsPastas })
    },
    productsEmpanadas: (req, res) => {
        res.render('./productos/productEmpanada', {empanada: productsEmpanadas});
    },
}

const products =[
    {
        
        id: "Hambuguesa2.0",
        title: 'Hambuguesa2.0',
        image: 'hamburguesa.jpg',
        imgDescription: '',
        price: 499
    },
    {   
        
        id: "Hambuguesa3.0",
        title: 'Hambuguesa3.0 ',
        image: 'hamburguesa2.jpg',
        imgDescription: 'Imagen de Hamburguesa 3.0',
        price: 599
    },
    {
        id: "Hambuguesa1",
        title: 'Combo Mar del plata',
        image: 'hamburguesa1.jpg',
        imgDescription: 'Imagen de Combo de Mar del Plata',
        price: 599
    },
    {
        id: "ComboBig",
        title: 'Combo Big',
        image: 'hamburguesa4.jpg',
        imgDescription: 'Imagen de Combo Big',
        price: 699
    },
    {
        id: "HamburguesaTripleBacon",
        title: 'Hamburguesa Triple',
        image: 'hamburguesa5.jpg',
        imgDescription: 'Imagen de Hamurguesa Triple Bacon',
        price: 1
    },
    {
        id: "GrandTasty",
        title: 'Vegan Burguer',
        image: 'hamburguesaPalta.jpg',
        imgDescription: 'Imagen de Grand Tasty',
        price: 799
    },


    {
        
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {   
    
        id: "Napolitana",
        title: 'Napolitana',
        image: 'napolitana.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Calabresa",
        title: 'Calabresa',
        image: 'calabresa.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 449
    },
    {
        id: "Fugaseta",
        title: 'Fugaseta',
        image: 'fugazzeta.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 459
    },
    {
        id: "Italiana",
        title: 'Italiana',
        image: 'pizzas.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 479
    },
    {
        id: "Grande-de-Muzza",
        title: 'Grande de Muzza',
        image: 'grandeDeMuzza.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 499
    },
    {
        id: "Noquis",
        title: 'Ñoquis',
        image: 'pastas3.jpg',
        imgDescription: 'Ñoquis',
        price: 399
    },
    {
        id: "Ravioles",
        title: 'Ravioles',
        image: 'pastas4.jpg',
        imgDescription: 'Ravioles',
        price: 399
    },
    {
        id: "Pasta1",
        title: 'Pasta economica',
        image: 'pastas1.jpg',
        imgDescription: 'Pasta economica',
        price: 299
    },
    {
        id: "Pasta2",
        title: 'Pasta Italiana',
        image: 'pastas2.jpg',
        imgDescription: 'Pasta Italiana',
        price: 399
    },
    {
        id: "Pasta3",
        title: 'Pasta',
        image: 'pastas.jpeg',
        imgDescription: '',
        price: 399
    },
    {
        id: "Pasta4",
        title: 'Pasta de la casa',
        image: 'pastas.jpeg',
        imgDescription: 'Pasta de la casa',
        price: 399
    },
    {
        id: "EmpanadasDeJamonyQueso",
        title: 'Jamón y Queso',
        image: 'empanada-jamon-y-queso.jpg',
        imgDescription: 'Empanadas jamon y queso',
        description: 'Empanadas de jamón con extra queso',
        price: 199
    },
    {
        id: 'EmpanadasDePollo',
        title: 'Pollo',
        image: 'empanadas.jpeg',
        imgDescription: 'Empanadas fritas',
        description: '',
        price: 8000
    },
    {
        id: "EmpanadasDeCarne",
        title: 'Carne',
        image: 'Empanada-de-Carne.jpg',
        imgDescription: 'Empanadas de carne',
        description: '',
        price: 120
    },
    {
        id: "EmpanadasDeChoclo",
        title: 'Choclo',
        image: 'empanadas2.jpeg',
        imgDescription: 'Empanadas al horno',
        description: '',
        price: 150
    },
    {
        id: "EmpanadasArabes",
        title: 'Arabes',
        image: 'empanadas-arabes.jpg',
        imgDescription: 'Empanadas Arabes',
        description: '',
        price: 155
    },
    {
        id: "Humita",
        title: 'Humita',
        image: 'empanadas-humita.jpg',
        imgDescription: 'Empanadas humita',
        description: '',
        price: 100
    },
    {
        id: "Combo1",
        title: 'Combo Parrilita',
        image: 'parrilla.jpg',
        imgDescription: 'Vino',
        price: 899
    },
    {
        id: "Combo2",
        title: 'Combo Familiar',
        image: 'parrillada.jpg',
        imgDescription: 'Vino',
        price: 999
    },
    {
        id: "Combo3",
        title: 'Combo Carnivoro',
        image: 'asado.jpeg',
        imgDescription: 'Vino',
        price: 999
    },
    {
        id: "CarneWagyu",
        title: 'Carne Wagyu',
        image: 'carne.jpeg',
        imgDescription: 'Vino',
        price: 1049
    },
    {
        id: "Especial",
        title: 'Especial De La Casa',
        image: 'carneasada.jpeg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Sandwich1",
        title: 'Sandwich de Bondiola',
        image: 'Sandwich-de-Bondiola.jpg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Vino-Michel-Torino",
        title: 'Vino Michel Torino',
        image: 'bebida1.jpg',
        imgDescription: 'Vino Michel Torino',
        price: 199
    },
    {
        id: "VinoNorton",
        title: 'Vino Norton',
        image: 'bebida2.jpg',
        imgDescription: 'Vino Norton',
        price: 199
    },
    {
        id: "Sprite",
        title: 'Sprite',
        image: 'bebida3.jpg',
        imgDescription: 'Sprite',
        price: 199
    },
    {
        id: "CocaCola",
        title: 'Coca Cola',
        image: 'bebida4.jpg',
        imgDescription: 'Coca Cola',
        price: 199
    },
    {
        id: "Corona",
        title: 'Corona',
        image: 'bebida5.jpg',
        imgDescription: 'Corona',
        price: 199
    },
    {
        id: "Heineken",
        title: 'Heineken',
        image: 'bebida6.png',
        imgDescription: 'Heineken',
        price: 199
    },

]

const productsEmpanadas = [
    {
        id: "EmpanadasDeJamonyQueso",
        title: 'Jamón y Queso',
        image: 'empanada-jamon-y-queso.jpg',
        imgDescription: 'Empanadas jamon y queso',
        description: 'Empanadas de jamón con extra queso',
        price: 199
    },
    {
        id:'EmpanadasDePollo' ,
        title: 'Pollo',
        image: 'empanadas.jpeg',
        imgDescription: 'Empanadas fritas',
        description: '',
        price: 8000
    },
    {
        id: "EmpanadasDeCarne",
        title: 'Carne',
        image: 'Empanada-de-Carne.jpg',
        imgDescription: 'Empanadas de carne',
        description: '',
        price: 120
    },
    {
        id: "EmpanadasDeChoclo",
        title: 'Choclo',
        image: 'empanadas2.jpeg',
        imgDescription: 'Empanadas al horno',
        description: '',
        price: 150
    },
    {
        id: "EmpanadasArabes",
        title: 'Arabes',
        image: 'empanadas-arabes.jpg',
        imgDescription: 'Empanadas Arabes',
        description: '',
        price: 155
    },
    {
        id: "Humita",
        title: 'Humita',
        image: 'empanadas-humita.jpg',
        imgDescription: 'Empanadas humita',
        description: '',
        price: 100
    },

]

const productsHamburguesa = [
    {
        id: "Hambuguesa2.0",
        title: 'Hambuguesa2.0',
        image: 'hamburguesa.jpg',
        imgDescription: '',
        price: 499
    },
    {
        id: "Hambuguesa3.0",
        title: 'Hambuguesa3.0 ',
        image: 'hamburguesa2.jpg',
        imgDescription: 'Imagen de Hamburguesa 3.0',
        price: 599
    },
    {
        id: "Hambuguesa1",
        title: 'Combo Mar del plata',
        image: 'hamburguesa1.jpg',
        imgDescription: 'Imagen de Combo de Mar del Plata',
        price: 599
    },
    {
        id: "ComboBig",
        title: 'Combo Big',
        image: 'hamburguesa4.jpg',
        imgDescription: 'Imagen de Combo Big',
        price: 699
    },
    {
        id: "HamburguesaTripleBacon",
        title: 'Hamburguesa Triple',
        image: 'hamburguesa5.jpg',
        imgDescription: 'Imagen de Hamurguesa Triple Bacon',
        price: 1
    },
    {
        id: "GrandTasty",
        title: 'Vegan Burguer',
        image: 'hamburguesaPalta.jpg',
        imgDescription: 'Imagen de Grand Tasty',
        price: 799
    },
]

const productsPizza = [
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Napolitana",
        title: 'Napolitana',
        image: 'napolitana.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Calabresa",
        title: 'Calabresa',
        image: 'calabresa.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 449
    },
    {
        id: "Fugaseta",
        title: 'Fugaseta',
        image: 'fugazzeta.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 459
    },
    {
        id: "Italiana",
        title: 'Italiana',
        image: 'pizzas.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 479
    },
    {
        id: "Grande-de-Muzza",
        title: 'Grande de Muzza',
        image: 'grandeDeMuzza.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 499
    },
]

const productsPastas =[
    {
        id: "Noquis",
        title: 'Ñoquis',
        image: 'pastas3.jpg',
        imgDescription: 'Ñoquis',
        price: 399
    },
    {
        id: "Ravioles",
        title: 'Ravioles',
        image: 'pastas4.jpg',
        imgDescription: 'Ravioles',
        price: 399
    },
    {
        id: "Pasta1",
        title: 'Pasta economica',
        image: 'pastas1.jpg',
        imgDescription: 'Pasta economica',
        price: 299
    },
    {
        id: "Pasta2",
        title: 'Pasta Italiana',
        image: 'pastas2.jpg',
        imgDescription: 'Pasta Italiana',
        price: 399
    },
    {
        id: "Pasta3",
        title: 'Pasta',
        image: 'pastas.jpeg',
        imgDescription: '',
        price: 399
    },
    {
        id: "Pasta4",
        title: 'Pasta de la casa',
        image: 'pastas.jpeg',
        imgDescription: 'Pasta de la casa',
        price: 399
    },

    
]
const productsAsado = [
    {
        id: "Combo1",
        title: 'Combo Parrilita',
        image: 'parrilla.jpg',
        imgDescription: 'Combo Parrilita',
        price: 899
    },
    {
        id: "Combo2",
        title: 'Combo Familiar',
        image: 'parrillada.jpg',
        imgDescription: 'Combo Familiar',
        price: 999
    },
    {
        id: "Combo3",
        title: 'Combo Carnivoro',
        image: 'asado.jpeg',
        imgDescription: 'Combo Carnivoro',
        price: 999
    },
    {
        id: "CarneWagyu",
        title: 'Carne Wagyu',
        image: 'carne.jpeg',
        imgDescription: 'Carne Wagyu',
        price: 1049
    },
    {
        id: "Especial",
        title: 'Especial De La Casa',
        image: 'carneasada.jpeg',
        imgDescription: 'Especial De La Casa',
        price: 199
    },
    {
        id: "Sandwich1",
        title: 'Sandwich de Bondiola',
        image: 'Sandwich-de-Bondiola.jpg',
        imgDescription: 'Sandwich de Bondiola',
        price: 199
    },
    
    
]
const productsDrinks = [
    {
        id: "Vino-Michel-Torino",
        title: 'Vino Michel Torino',
        image: 'bebida1.jpg',
        imgDescription: 'Vino Michel Torino',
        price: 199
    },
    {
        id: "VinoNorton",
        title: 'Vino Norton',
        image: 'bebida2.jpg',
        imgDescription: 'Vino Norton',
        price: 199
    },
    {
        id: "Sprite",
        title: 'Sprite',
        image: 'bebida3.jpg',
        imgDescription: 'Sprite',
        price: 199
    },
    {
        id: "CocaCola",
        title: 'Coca Cola',
        image: 'bebida4.jpg',
        imgDescription: 'Coca Cola',
        price: 199
    },
    {
        id: "Corona",
        title: 'Corona',
        image: 'bebida5.jpg',
        imgDescription: 'Corona',
        price: 199
    },
    {
        id: "Heineken",
        title: 'Heineken',
        image: 'bebida6.png',
        imgDescription: 'Heineken',
        price: 199
    },
]


module.exports = productController;