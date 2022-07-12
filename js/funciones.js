/* Numero primo recibiendo el valor desde un input de html */
// function esPrimo() {
//     let numero = document.getElementById('num').value;
//     let resp = true;

//     if (numero == 0 || numero == 1 || numero == 4 || numero < 1) {
//         resp = false;
//     }
//     for (let x = 2; x < numero; x++) {
//         if (numero % x == 0) {
//             resp = false;
//         }
//     }
//     if (resp) {
//         document.querySelector('#resultado').innerHTML = '<span>' + numero + ' es primo, ' + resp + '</span>';
//     } else {
//         document.querySelector('#resultado').innerHTML = '<span>' + numero + ' no es primo, ' + resp + '</span>';
//     }
// }


/* Comparación de arreglos recibidos y resultados en consola */
// function compararArray(a, b) {
//     if ((a.length) != (b.length)) return false;

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] != b[i]) return false;
//     }

//     return true;
// }
// console.log(compararArray(["a", "b", "c", "d"], ["a", "b", "c", "d"]));

/* Numeros aleatorios hasta */
// function aleatorio(desde, hasta) {
//     return Math.floor(Math.random() * (hasta - desde) + desde);
// }
// console.log(aleatorio(20, 45));

/* Busqueda de productos */
/* Id, Nombre del Prodcuto, Marca, Fecha de expiración */
// const productos = [
//     {
//         id: 1,
//         nombreProducto: 'Pan dulce',
//         marca: 'Bimbo',
//         fechaExpiracion: '2022-04-20'
//     },
//     {
//         id: 2,
//         nombreProducto: 'Jabon',
//         marca: 'Zote',
//         fechaExpiracion: '2022-07-10'
//     },
//     {
//         id: 3,
//         nombreProducto: 'Leche',
//         marca: 'Santa Clara',
//         fechaExpiracion: '2022-10-11'
//     },
//     {
//         id: 4,
//         nombreProducto: 'Jamon',
//         marca: 'Fut',
//         fechaExpiracion: '2022-08-08'
//     },
//     {
//         id: 5,
//         nombreProducto: 'Huevos',
//         marca: 'Calvario',
//         fechaExpiracion: '2022-09-17'
//     },
// ]

// function buscarPorId(id) {
//     return productos.filter((producto) =>
//         producto.id === id
//     )
// }

// function buscarPorFecha(fechaA, fechaB) {
//     fechaA = new Date(fechaA);
//     fechaB = new Date(fechaB);
//     return productos.filter((producto) => {
//         const fechaExpiracion = new Date(producto.fechaExpiracion);
//         return fechaExpiracion >= fechaA && fechaExpiracion <= fechaB
//     })
// }
// console.log(buscarPorId(3));
// console.log(buscarPorFecha('2022-07-10', '2022-10-15'));

/* Fila ordenada */
/* Ordena una lista de numeros de un arreglo / numeros generados aleatoriamente, los añade a un arreglo y los ordena */
// function ordenar(numeros) {
//     return numeros.sort()
// }

// const arreglo = [];

// setInterval(addElemento, 2000, () => Math.floor(Math.random()*100));

// function addElemento(numero){
//     const prioridad = numero();

//     arreglo.push(prioridad);
//     arreglo.sort((a,b)=>a-b);
//     console.log(arreglo);
// }
// console.log(ordenar([1,5,9,2,7]))

/* Precio promedio */
/* suma el precio de cada casa en una localidad determinada y calcula el precio promedio de cada casa */
// const acumulado = {};

// for (const casa of casas) {
//     if (!acumulado[casa.localidad]) {
//         acumulado[casa.localidad] = { accumuladoPrecio: 0, contador: 0 };
//     }
//     acumulado[casa.localidad].accumuladoPrecio += casa.precio;
//     acumulado[casa.localidad].contador += 1;
// }

// console.log(acumulado);

// const localidades = Object.keys(acumulado);

// for (const localidad of localidades) {
//     console.log(localidad + ' ' + Math.floor(acumulado[localidad].accumuladoPrecio / acumulado[localidad].contador));
// }

/* Orden alfabetico */
/* Lista de nombres en el archivo nombres.js*/

// const ordenaNombres = nombres.sort((a, b) => {
//     const nombreA = a.split(' ')[0];
//     const nombreB = b.split(' ')[0];
//     return nombreA < nombreB ? -1 : nombreA > nombreB ? 1 : 0;
// });

// console.log(ordenaNombres);


/* Simular carrito de compras */
/* Precio total de productos que no han caducado */
// class Producto {
//     _nombre;
//     _precio;
//     _fechaVencimiento;

//     constructor(nombre, precio, fechaVencimiento) {
//         this._nombre = nombre;
//         this._precio = precio;
//         this._fechaVencimiento = new Date(fechaVencimiento);
//     }
// }

// function carritocompra(productos) {
//     const hoy = new Date();
//     const productosValidos = productos.filter((producto) => producto._fechaVencimiento > hoy);
//     return productosValidos.reduce((acumulador, producto) => acumulador += producto._precio, 0);
// }

// const resultado = carritocompra([
//     new Producto('leche', 4, '2022-08-15'),
//     new Producto('pan', 2, '2022-09-14'),
//     new Producto('mantequilla', 3, '2022-08-18'),
//     new Producto('queso', 4, '2022-03-19'),
// ]);

// console.log(resultado);

/* Calculadora */
const input = document.getElementById('input-numero');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const division = document.getElementById('divisar');

const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

sumar.addEventListener('click', ejecutarOperacion);
restar.addEventListener('click', ejecutarOperacion);
multiplicar.addEventListener('click', ejecutarOperacion);
division.addEventListener('click', ejecutarOperacion);
calcular.addEventListener('click', ejecutarOperacion);

const operacion = { valor1: null, valor2: null, operador: null };
let tempOperador = null;

function mostrarValores(valor) {
    resultado.innerText = valor;
}

// Se puede utilizar código alternativo si así se desea:

function ejecutarOperacion(evento) {
    //Completar función:

    const valor = input.value === '' ? 0 : parseInt(input.value);
    input.value = 0;

    if (!operacion.valor1) {
        operacion.valor1 = valor;
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    if (!operacion.operador) {
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    operacion.valor2 = valor;

    if (evento.target.innerText !== '=') {
        tempOperador = evento.target.innerText;
    }

    calcularResultado();

}

function calcularResultado() {
    //Completar función:
    let total;
    switch (operacion.operador) {
        case '+':
            total = operacion.valor1 + operacion.valor2;
            break;
        case '*':
            total = operacion.valor1 * operacion.valor2;
            break;
        case '-':
            total = operacion.valor1 - operacion.valor2;
            break;
        case '/':
            total = operacion.valor1 / operacion.valor2;
            break;
    }

    mostrarValores(`${total} ${tempOperador ?? ''}`);

    operacion.valor1 = total;
    operacion.valor2 = null;
    operacion.operador = tempOperador ?? null;
    tempOperador = null;
}