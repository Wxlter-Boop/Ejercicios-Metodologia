///Ejercicio 1///
const nombre = "Walter";
const edad = 20;
let mascotas = true;
console.log(`
Nombre: ${nombre}
Edad: ${edad}
Tiene mascotas?: ${mascotas}`);

///Ejercicio 2///
let numeroA = 20;
let numeroB = 10;

console.log(numeroA + numeroB)
console.log(numeroA - numeroB)
console.log(numeroA * numeroB)
console.log(numeroA / numeroB)

///Ejercicio 3///
function recibirNombre(nombre){
  return `Hola ${nombre}, como estas\n`;
}
console.log(recibirNombre("Walter"))

//Ejercicio 4///
const frutas = ['Pera','Manzana','Frutilla','Naranja','Arandano'];
console.log("Nombres de frutas: ");
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}
//Ejercicio 5///
const numeros = [3, 18, 9];
const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

//Ejercicio 6///
const Personas = [{Nombre: "Walter", Edad: 20},
                  {Nombre: "Sergio", Edad: 20},
                  {Nombre: "Roberto", Edad: 21,
                  }]

console.log("\nNombres de las personas:");
Personas.forEach(persona => console.log(persona.Nombre));

///Ejercicio 7///
var arrayNumeros = [1,5,6,3,7,10,20];
let Mayores = arrayNumeros.filter(mayor => mayor > 5);
console.log("\nNumeros mayores a 5: ", Mayores);

///Ejercicio 8///
var arrayNumeros = [1,5,6,3,7,10,20];
let Suma = arrayNumeros.reduce((total, numero) => {
  return total + numero;
});
console.log("La suma total del array es: ", Suma);

///Ejercicio9///
async function esperarSegundos() {
  await new Promise(msg => setTimeout(msg, 2000));
  return "2 segundos pasaron :v";
}

async function mensaje() {
  const mensaje = await esperarSegundos();
  console.log(mensaje);
}

mensaje();










