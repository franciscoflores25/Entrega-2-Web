let formulario = document.getElementById("Formulario");
let nombre:any= document.getElementById("Nombre");
let apellidos:any= document.getElementById("Apellidos");
let rut:any= document.getElementById("RUT");
let correo:any= document.getElementById("Correo");
let telefono:any= document.getElementById("Telefono");
let conocimiento:any= document.getElementById("Rango");
let descripcion:any= document.getElementById("Descripcion");   
let mensaje:any=document.getElementById("Mensaje");
let lenguajes:any=document.getElementsByName("Lenguajes");
let radio= document.getElementsByName("Experiencia");
let contador:number=0;

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    console.log(nombre.value);
    console.log(apellidos.value);

    if(rut.value.indexOf("-") > -1){
        console.log(rut.value);
    }

    console.log(correo.value);

    if(telefono.value.length == 9){
        console.log(telefono.value);
    }else{
        alert("Por favor ingrese un numero de telefono valido");
        throw 'Error al ingresar el numero telefonico';
    }
 

    for (let i:number=0; i<lenguajes.length; i++){
        let lenguaje= <HTMLInputElement> lenguajes[i];
        if(lenguaje.checked == true){
            console.log(lenguaje.value);
            contador++;
        }
    }
    if(contador==0){
        alert("Por favor seleccione al menos una opcion");
        throw 'Error en la seleccion del checklist';
    }

    console.log(conocimiento.value);

    for (let i:number=0; i<radio.length; i++){
        let pruebita= <HTMLInputElement> radio[i];
        if(pruebita.checked == true){
            console.log(pruebita.value);
            break;
        }
    }
    
    if(descripcion.value.length>300){
        alert("La descripcion supera el limite de digitos");
        throw 'Descripcion muy larga';
    }
    console.log(descripcion.value);
    
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color="green";
});


