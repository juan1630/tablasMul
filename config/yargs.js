const opts = {
    base: {
        demand:true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
    // el alias nos permite agregar como este argumento 

}

const arvg  = require('yargs')
                        .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                        .command('crear','Genera un archivo con los nùmeros de multiplicar', opts )
                        .help()
                        .argv;

module.exports = {
    arvg
}


