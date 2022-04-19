console.log('--EXERCISE 1: VARIABLES AND OPERATORS --');
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
de ambos números en una 3er variable.*/
console.log('-Exercise 1.a:');

var distanceRosBsAs, distanceBsAsMdq ;
distanceRosBsAs = 299;
distanceBsAsMdq = 410;
var totalDistance = distanceRosBsAs + distanceBsAsMdq;

console.log(totalDistance)

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('-Exercise 1.b:');

var iceCreamFlavour1, iceCreamFlavour2;
iceCreamFlavour1 = 'strawberry';
iceCreamFlavour2 = 'chocolate';
var flavours = iceCreamFlavour1 + ' ' + iceCreamFlavour2;

console.log(flavours)

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log('-Exercise 1.c:');

var iceCreamFlavour1, iceCreamFlavour2;
iceCreamFlavour1 = 'strawberry';
iceCreamFlavour2 = 'chocolate';
var totalLength = iceCreamFlavour1.length+iceCreamFlavour2.length;

console.log(totalLength)