var formulario = document.getElementById("Formulario");
var nombre = document.getElementById("Nombre");
var apellidos = document.getElementById("Apellidos");
var rut = document.getElementById("RUT");
var correo = document.getElementById("Correo");
var telefono = document.getElementById("Telefono");
var conocimiento = document.getElementById("Rango");
var descripcion = document.getElementById("Descripcion");
var mensaje = document.getElementById("Mensaje");
var lenguajes = document.getElementsByName("Lenguajes");
var radio = document.getElementsByName("Experiencia");
var contador = 0;
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(nombre.value);
    console.log(apellidos.value);
    if (rut.value.indexOf("-") > -1) {
        console.log(rut.value);
    }
    console.log(correo.value);
    if (telefono.value.length == 9) {
        console.log(telefono.value);
    }
    else {
        alert("Por favor ingrese un numero de telefono valido");
        throw 'Error al ingresar el numero telefonico';
    }
    for (var i = 0; i < lenguajes.length; i++) {
        var lenguaje = lenguajes[i];
        if (lenguaje.checked == true) {
            console.log(lenguaje.value);
            contador++;
        }
    }
    if (contador == 0) {
        alert("Por favor seleccione al menos una opcion");
        throw 'Error en la seleccion del checklist';
    }
    console.log(conocimiento.value);
    for (var i = 0; i < radio.length; i++) {
        var pruebita = radio[i];
        if (pruebita.checked == true) {
            console.log(pruebita.value);
            break;
        }
    }
    if (descripcion.value.length > 300) {
        alert("La descripcion supera el limite de digitos");
        throw 'Descripcion muy larga';
    }
    console.log(descripcion.value);
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color = "green";
});
