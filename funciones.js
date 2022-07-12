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
console.log(compararArray(["a", "b", "c", "d"], ["a", "b", "c", "d"]));