require('colors');

const mostrarMenu = ()=>{
    console.clear();
    console.log('========================'.green);
    console.log('Seleccione una opcion'.green);
    console.log('========================\n'.green);

    console.log(`${ '1.'.green } Crear Tarea` );
    console.log(`${ '2.'.green } Listar tareas`);
    console.log(`${ '3.'.green } Listar tareas completas`);
    console.log(`${ '4.'.green } Borrar tarea`);
    console.log(`${ '5.'.green } Salir`);
};

module.exports = {
    mostrarMenu,

}