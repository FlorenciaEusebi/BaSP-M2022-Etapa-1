console.log('--EXERCISE 6: FUNCTIONS --');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.*/
console.log('-Exercise 6.a:');
function sum(number1,number2) {
  return number1 + number2;
}
var result = sum(25,30);
console.log(result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error
y retornar el valor NaN como resultado.*/
console.log('-Exercise 6.b:');
function sum(number1,number2) {
  if(isNaN(number1) || isNaN(number2)) {
    alert('One parameter contains an error');
      return NaN;
        } else {
          return number1 + number2;
        }
}
var result = sum(25,'hello');
console.log(result);

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');
function validate(number) {
  if(Number.isInteger(number)){
      return true;
        } else {
          return false;
          }
}

/* d. A la función suma del ejercicio 6 b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
console.log('-Exercise 6.d:');
function sum(number1, number2) {
  if(isNaN(number1) || isNaN(number2)) {
    alert('One parameter contains an error');
      return NaN;
        } else {
          if(!validate(number1) || !validate(number2)) {
            alert('Not Integer');
              number1 = Math.round(number1);
              number2 = Math.round(number2);
                } return number1 + number2;
                }
}
console.log(sum(4,2.3))

/* e. Convertir la validación del ejercicio 6 d) en una función separada y llamarla dentro de
la función suma probando que todo siga funcionando igual.*/
console.log('-Exercise 6.e:');
function otherValidation(number) {
  if(!validate(number)) {
    alert('Not Integer');
      number = Math.round(number);
    }
    return number;
}
function sum(number1, number2){
   if(isNaN(number1) || isNaN(number2)){
    alert('One parameter contains an error');
        return NaN;
          } else {
              return otherValidation(number1) + otherValidation(number2);
              }
}
console.log(sum(4,2.3));