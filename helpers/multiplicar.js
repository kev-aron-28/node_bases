const crearArchivo = async (base, list, limite) => {
    const fs = require('fs');
    const colors = require('colors')
    let salida = '';
    for (let i = 1; i <= limite; i++) {
        salida += ` ${base} x ${i} = ${(base * i)} \n`;
    }
    if(list){
        console.log(`Tabla de ${base}`.blue);
        console.log(salida);
    }

    try {
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base} creado`
    } catch(e) {
        return e
    }
}

module.exports = {
    crearArchivo
}