const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
const colors = require('colors')
// const [,,base = 'base=3' ] = process.argv
// const [, nbase = 4] = base.split('=')
// console.log(nbase);
console.log('limite = ', argv.limite);
crearArchivo(parseInt(argv.base), argv.listar, parseInt(argv.limite))
    .then(nombre => {
        console.log(nombre.green);
    }) 
    .catch(e => {
        console.log(e);
    })

