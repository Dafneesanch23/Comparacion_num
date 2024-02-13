// Instrucciones:

// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entradas: 
// 4, 4, 2.
// Salida:
// 4, 4, 2.
// 2, 4, 4
// Pruébalo con las combinaciones de números que se te ocurran

  
  let numUser = [];
  
  for (let i = 0; i < 3; i++) {
    let datos = prompt(`Ingrese el número ${i + 1}:`);
    let numero = parseFloat(datos);
  
    if (isNaN(numero)) {
      console.log(`"${datos}" no es un número válido. Ingrese un número.`);
      i--; 
    }else {
      numUser.push(numero);
    }
  }

  numUser.sort((a, b) =>{
    if (a==b){
      return 0 + console.log(`Los números ${a} y ${b} son iguales`);
    } if (a > b){
      return -1;
    } return 1;

  })
 
  if (numUser.length === 0) {
    console.log('No se ingresaron números válidos.');
  } else {
    console.log(`Orden descendente: ${numUser[0]}, ${numUser[1]}, ${numUser[2]}`);
    console.log(`Orden ascendente: ${numUser.reverse()[0]}, ${numUser.reverse()[1]}, ${numUser.reverse()[2]}`);
  }