const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false,
            describe: 'Es la base de la tabla'
        })
        .option('lim', {
            alias: 'limite',
            type: 'number',
            default: 10,
            describe: 'Es el limite de la tabla'
        })
        .check((argv) => {
            if (isNaN(argv.b) || isNaN(argv.lim)) {
                throw 'Debe de ser un numero'
            }
            return true
        })
        .argv;

module.exports = argv