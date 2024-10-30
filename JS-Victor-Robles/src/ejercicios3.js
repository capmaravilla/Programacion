//? ---------------------- 24

// let array = [];

// for (let i = 1; i <= 10; i++) {
//   array.push(Math.floor(Math.random() * 101));
// }

// console.log(array);

// let numRandom = array[Math.floor(Math.random() * 11)];

// console.log(numRandom);

// const num = prompt('Di un numero');

// if (array.includes(parseInt(num))) {
//   console.log('enhorabuena!');
// } else {
//   console.log('no, era el ' + numRandom);
// }

//? ---------------------- 25

// let array = ['chocolate', 'piña', 'tomate', 'queso'];

// let receta = `Ponemos el ${array[2]}, luego añadimos el ${array[3]}, ponemos trozos de ${array[1]} y por ultimo untamos el ${array[0]}`;

// console.log(receta);

//? ---------------------- 26

// let array = ['amigo', 'enemigo', 'casa', 'perro'];

// function cuentaLetras(arr) {
//   return arr.map(u => u.length);
// }

// console.log(cuentaLetras(array));

//? ---------------------- 29

// let string = 'murcielago';

// function buscaVocales(srt) {
//   vocales = 0;
//   // let arr = srt.split('');
//   // for (let el of arr)
//   //   if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') {
//   //     vocales++;
//   //   }
//   const voc = 'aeiouAEIOU';
//   for (let letra of srt) {
//     if (voc.includes(letra)) {
//       vocales++;
//     }
//   }

//   return vocales;
// }
// console.log(buscaVocales(string));

//? ---------------------- 30

// const num = 5;

// function factorial(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) arr.push(i);
//   console.log(arr);
//   return arr.reduce((acc, el) => acc * el);
// }

// function facto(n) {
//   let num = 1;
//   for (let i = 2; i <= n; i++) {
//     num *= i;
//   }
//   return num
// }

// console.log(facto(num));

//? ---------------------- 31
