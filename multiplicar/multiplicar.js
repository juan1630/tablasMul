const fs = require('fs');
const colors = require('colors');

// limite = 10, valor por defecto

let listarBase = (base, limite = 10 )=> {

    console.log('============================='.green);
    console.log(`Talbla de ${base } `.green );
    console.log('============================='.green);
    
    for( i=0; i <= limite; i++ ){
        console.log(`${i} * base = ${ base * i }` .yellow );
    }
}


let crerArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject ) => {

        if(!Number(base)){
            reject(`El valor introducido: ${base} no es un nùmero`.red )
            return
        }
        let data = '';
        
        for (let i=0; i<= limite; i++ ){
            data += `${base } * ${i } = ${base * i} \n` 
        }
        
        
        // esta funcion escribe un documento que se indica en el primer argumento, el segundo argumento los datos a grabar y el el callbck
        fs.writeFile( `tablas/tabla-${base}.txt`, data, (error) => {
            if (error) reject(error)
            else 
                resolve( `Archivo creado en -- tablas/tabla-${base}.txt`.pink )
        });
        
    });
}


// el modulo es un objeto global que esta disponible en toda la aplicacion

module.exports = {
    crerArchivo,
    listarBase
}
