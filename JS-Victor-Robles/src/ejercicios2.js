//? ----------------------------- 11

// const edadPerro = prompt('¿Que edad tiene tu perro?');

// alert(`Serían ${edadPerro * 7} años de humano`);

//? ----------------------------- 12

// let num1 = prompt('Escribe el primer numero', 0);
// let num2 = prompt('Escribe el segundo numero', 0);

// while (
//   num1 <= 0 ||
//   num2 <= 0 ||
//   isNaN(parseInt(num1)) ||
//   isNaN(parseInt(num2))
// ) {
//   num1 = prompt('Escribe el primer numero otra vez', 0);
//   num2 = prompt('Escribe el segundo numero', 0);
// }

// if (num1 > num2) {
//   alert(num1 + ' es mayor que el ' + num2);
// } else if (num1 < num2) {
//   alert(num2 + ' es mayor que el ' + num1);
// } else if (num1 == num2) {
//   alert(num1 + ' y ' + num2 + 'los numeros son iguales');
// }

//? ----------------------------- 13

// const canguroDist = 3;
// const saltos = 17;

// let distancia = 0;
// for (i = 1; i <= saltos; i++) {
//   distancia += canguroDist;
//   console.log('Ha recorrido ' + distancia + ' metros en ' + i + ' saltos');
// }

//? ----------------------------- 14

// const choice = prompt('que musica prefieres? pop, rock o rap');

// switch (choice) {
//   case 'pop':
//     alert('El DJ pone pop');
//     break;
//   case 'rap':
//     alert('El DJ pone rap');
//     break;
//   case 'rock':
//     alert('El DJ pone rock');
//     break;

//   default:
//     alert('No hay ese genero');
//     break;
// }

//? ----------------------------- 15

// let suma = 0;
// let cantidad = 0;
// let num = 0;

// do {
//   num = parseInt(prompt('Escribe un numero, negativo para acabar'));
//   suma += num;
//   cantidad++;
// } while (num >= 0);

// alert('La suma de los numeros es ' + suma + ', y la media ' + suma / cantidad);

//? ----------------------------- 16

// const num = parseInt(prompt('Elige un número:'));
// let tabla = 'TABLA DEL ' + num;
// for (i = 0; i <= 10; i++) {
//   tabla += '\n' + num + ' x ' + i + ' = ' + num * i;
// }

// alert(tabla);
// console.log(tabla);

//? ----------------------------- 17

// const num1 = parseInt(prompt('Dame un numero'));
// const num2 = parseInt(prompt('Dame otro numero'));
// const mayor = num1 > num2 ? num1 : num2;
// const menor = num1 < num2 ? num1 : num2;
// let impares = '';
// for (i = menor; i <= mayor; i++) {
//   if (i % 2 != 0) {
//     console.log('El numero ' + i + ' es impar');
//   }
// }

//? ----------------------------- 18

// const numero = Math.floor(Math.random() * 17 + 1);

// let num;

// do {
//   num = prompt('Itenta adivinar el numero del 1 al 17');

//   if (num < numero) {
//     alert('elige un numero más alto');
//   } else if (num > numero) {
//     alert('elige un numero más bajo');
//   }
// } while (num != numero);

// alert('Exacto! el numero era el ' + numero);

//? ----------------------------- 19

// const num = parseInt(prompt('Cual es el numero que quieres dividir', 1));

// for (let i = 1; i <= num; i += 0.5) {
//   num % i == 0 ? console.log(i) : 0;
// }

//? ----------------------------- 20

// let num = prompt('Inserta el numero', 0);

// while (isNaN(parseInt(num))) {
//   num = prompt(num + ' no es un numero, inserta otro');
// }

// num % 2 == 0 ? alert(num + ' es par') : alert(num + ' Es impar');

// if (num % 2 == 0) {
//   console.log(num + ' es par');
// }
// console.log(num + ' Es impar');

//? ----------------------------- 21

// let num1 = parseInt(prompt('Inserta el primer valor'));
// let num2 = parseInt(prompt('Inserta el segundo valor'));

// while (isNaN(num1) || isNaN(num2)) {
//   num1 = prompt(
//     'Uno de los valores no era un numero, vuelve a insertar el primer valor'
//   );
//   num2 = prompt('Vuelve a insertar el segundo valor');
// }

// let resultado =
//   'resultados: suma: ' +
//   (num1 + num2) +
//   ' ,resta: ' +
//   (num1 - num2) +
//   ' ,multiplicacion: ' +
//   num1 * num2 +
//   ' division: ' +
//   num1 / num2;

// console.log(resultado);
// alert(resultado);

//? ----------------------------- 22

// let bolsa = 37;
// console.log('Tengo 37 caramelos');
// for (i = 36; i >= 0; i--) {
//   console.log('Como un caramelo, me quedan ' + i);
// }

// while (bolsa > 0) {
//   bolsa--;
//   console.log('Como un caramelo, me quedan ' + bolsa);
// }

//? ----------------------------- 23

// console.log('Empieza la cuenta atras:');
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log('DESPEGE!!!');
