console.log('--EXERCISE 2: STRINGS --');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
 en mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2.a:');
var tenLettersString = 'quebradadehumauaca';
console.log(tenLettersString.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.b:');
var tenLettersSubstring = 'PeninsuladeValdes';
var result = tenLettersSubstring.substring(0,5);
console.log(result);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.c:');
var nationalParks = 'LosGlaciares';
var result = nationalParks.substring(nationalParks.length-3);
console.log(result);

/* d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.d:');
var ocean = 'atlanticocean';
var result = ocean.substring(0,1).toUpperCase() + ocean.substring(1,13).toLowerCase();
console.log(result);

/* e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2.e:');
var withSpace = 'pacific ocean';
var result = withSpace.indexOf(' ',0);
console.log(result);

/* f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letras de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.f:');
var longWords = 'argentinian landscapes';
var result = longWords.substring(0,1).toUpperCase() + longWords.substring (1, longWords.indexOf(' ',0))+' ';
result = result+longWords.substring((longWords.indexOf(' ',0)+1),(longWords.indexOf(' ',0)+2)).toUpperCase();
result = result+longWords.substring((longWords.indexOf(' ',0)+2));
console.log(result);