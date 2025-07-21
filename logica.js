const prompt = require("prompt-sync")();

let numeros = prompt("Por favor ingresa tres números y sepáralos con comas: ")
                .split(",")
                .map(n => Number(n.trim()));

let num1 = numeros[0];
let num2 = numeros[1];
let num3 = numeros[2];

let mayor, medio, menor;

if (num1 === num2 && num2 === num3) {
    console.log("😒 Todos los números son iguales:", num1, num2, num3);
} else if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }

console.log(" ☝️ De mayor a menor:", mayor, medio, menor);
console.log(" 👇 De menor a mayor:", menor, medio, mayor);
