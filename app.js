import yargs from "yargs";
import { crearArchivo } from "./helpers/multiplicar.mjs";

const base = 9; 

// const argv = process.argv.slice(2);
// const argv = yargs(process.argv.slice(2)).argv;

console.clear();

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log( err ));
 
// console.log( argv );