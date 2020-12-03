/* Trabajo en TERMINAL TypeScriptLang.org
tsc -v para ver versión de ts
tsc app1.ts para compilar a JS
tsc app1.ts -w (añade watching, compila cambios sobre la marcha)

tsc -init (crea un archivo tsconfig.json)
tsc -w (hace watching a toda la carpeta, cada nuevo archivo ts lo compila a JS)
*/
console.log('hola mundo');

// Tipos de datos en TypeScript

//string

let texto: string;
texto = "hola soy un texto";

//number

let numero:number= 1234;

//boolean

let verdadFalso:boolean = false; 

//any

let cualquiera:any = "cualquier cosa";

// string[]

let arrayCaracter:string[] = ["texto1","texto2"];
let arrayNum:number[] = [1,2,3];
let arrayBoolean:boolean[] = [false, true];
let arrayCualquiera:any[] = ["texto",2,false];