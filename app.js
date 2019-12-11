// REQUIERES

const { crerArchivo, listarBase } = require('./multiplicar/multiplicar');
const arvg  = require('./config/yargs').arvg;
const colors = require('colors');
// este requiere es de una libreria propia de nodejs

//  console.log(process.argv);

// let argv2 = process.argv;

// let parametro =argv[2];
// let base = parametro.split('=')[1]

// split corta una cadena de texto

// console.log(base);


let comando = arvg._[0];

switch( comando ){
    case 'listar':
        listarBase( arvg.base, arvg.limite )
        // .then( resp => {

        // })        
    break;

    case 'crear':

        crerArchivo( arvg.base, arvg.limite )
            .then( (archivo)=> {
                console.log(`Èl archivo fue creado ${archivo}`, colors.green( archivo ) );
                })
            .catch( error => {
                console.log(error);
            });

        break;

    default:
        console.log('Comando no reconocido'.red);
}
