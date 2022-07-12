/* Numero primo recibiendo el valor desde un input de html */
function esPrimo (){
    let numero = document.getElementById('num').value;
    let resp = true;

    if (numero == 0 || numero == 1 || numero == 4 || numero < 1) {
        resp = false;
    } 
	for (let x = 2; x < numero; x++) {
		if (numero % x == 0){
            resp = false;
        }
	}
    if (resp){
        document.querySelector('#resultado').innerHTML = '<span>'+numero + ' es primo, ' + resp +'</span>';
    }else{
        document.querySelector('#resultado').innerHTML = '<span>'+numero + ' no es primo, ' + resp +'</span>';
    }
}


/* Comparación de arreglos recibidos y resultados en consola */
function compararArray(a, b){
    if ((a.length) != (b.length)) return false;

    for(let i=0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }

    return true;
}
// console.log(compararArray(["a", "b", "c", "d"], ["a", "b", "c", "d"]));

/* Numeros aleatorios hasta */
function aleatorio(desde, hasta){
    return Math.floor(Math.random() * (hasta-desde) + desde);
}
// console.log(aleatorio(20, 45));

/* Busqueda de productos */
/* Id, Nombre del Prodcuto, Marca, Fecha de expiración */
const productos =[
    {
        id:1,
        nombreProducto: 'Pan dulce',
        marca: 'Bimbo',
        fechaExpiracion: '2022-04-20'
    },
    {
        id:2,
        nombreProducto: 'Jabon',
        marca: 'Zote',
        fechaExpiracion: '2022-07-10'
    },
    {
        id:3,
        nombreProducto: 'Leche',
        marca: 'Santa Clara',
        fechaExpiracion: '2022-10-11'
    },
    {
        id:4,
        nombreProducto: 'Jamon',
        marca: 'Fut',
        fechaExpiracion: '2022-08-08'
    },
    {
        id:5,
        nombreProducto: 'Huevos',
        marca: 'Calvario',
        fechaExpiracion: '2022-09-17'
    },
]

function buscarPorId(id){
    return productos.filter((producto)=> 
        producto.id === id
    )
}

function buscarPorFecha(fechaA, fechaB){
    fechaA = new Date(fechaA);
    fechaB = new Date(fechaB);
    return productos.filter((producto)=> {
        const fechaExpiracion = new Date(producto.fechaExpiracion);
        return fechaExpiracion >= fechaA && fechaExpiracion <= fechaB
    })
}
// console.log(buscarPorId(3));
// console.log(buscarPorFecha('2022-07-10', '2022-10-15'));

/* Fila ordenada */
function ordenar(numeros){
    return numeros.sort()
}
// console.log(ordenar([1,5,9,2,7]))

/* Precio promedio */
