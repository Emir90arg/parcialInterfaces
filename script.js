function getNombre() {
    var nombre = null;
    nombre = document.getElementById("nombre").value;
    document.getElementById('nom').innerHTML = nombre;
}
function validarNumero(e){
    key = e.keyCode || e.which
    teclado=String.fromCharCode(key)
    numeros = "0123456789"

    if(numeros.indexOf(teclado)==-1){
        return false
    }
}