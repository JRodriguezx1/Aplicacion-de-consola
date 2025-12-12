console.log("inicio de aplicacion...");
const colors = require('colors');
const { mostrarMenu, pausa } = require('./helper/mensajes');

const menu = async()=>{
    let opt = '';
    do {
        opt = await mostrarMenu();
        console.log({opt});
        if(opt !== '0')await pausa();
    } while (opt !== '0');
}

menu();