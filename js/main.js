document.addEventListener('DOMContentLoaded',function(event){
    document.getElementById('mi_formulario').addEventListener('submit', validarFormulario)
});

function validarFormulario(e){
    var enviar = false;
    e.preventDefault();
    enviar = validarCampos();
    if(enviar){
        mensajeValidado();
    }
    
};
    

//Funcion que valida el email:

function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function mensajeError(textNode){
    //Crear nodo tipo Element
    var error = document.createElement("p");
    var iconX = document.createElement("i");
    //Crear un nodo tipo Text que sera el contenido
    var msjError = document.createTextNode(textNode);
    //Añadir el nodo Text como hijo del nodo Element
    error.appendChild(msjError);
    error.appendChild(iconX);
    //Agregar icono de fontAwesome a través de la clase
    iconX.classList.add("fas");
    iconX.classList.add("fa-times");
    // Añadir el nodo Element como hijo de la pagina
    var errores =  document.getElementById("errores");
    errores.appendChild(error)
    agregarClase(error);
}
function agregarClase(element){
    element.classList.add("alert");
    element.classList.add("alert-danger");
}
function validarCampos(){
      //Validacion campo nombre
      if(document.getElementById('usuario').value === ''){
        mensajeError("ERROR: Debe elegir un nombre de usuario");
        return false;
    }else{
        console.log("campo de usuario valido");
    }

    //Validacion campo email
    if(!validarEmail(document.getElementById('email').value)){
        mensajeError("ERROR: Formato de correo invalido");
        return false;
    }else{
        console.log("Email correcto");
    }
    //Validar contraseña que tenga entre 5 y 8 caracteres
    var contraseña = document.getElementById('contraseña').value;
    if(contraseña.length > 4 && contraseña.length < 9){
        console.log("tiene entre 4 y 8 caracteres")
    }else{
        mensajeError("ERROR: La contraseña debe tener entre 4 y 8 caracteres");
        return false;
    }
    return true;
}
function mensajeValidado(){
    //Se crea el Nodo principal (div de errores), se crea un element <p>, su texto de OK, un element <i> del icono check que se agrega con las classes de FontAwesome fas y fa-check
    var errores =  document.getElementById("errores");
    var parrafoValidado = document.createElement("p");
    var msjValidado = document.createTextNode("Formulario OK.");
    var iconOK = document.createElement("i");
    errores.appendChild(parrafoValidado);
    parrafoValidado.appendChild(msjValidado);
    parrafoValidado.appendChild(iconOK);
    iconOK.classList.add("fas");
    iconOK.classList.add("fa-check");
    parrafoValidado.classList.add("alert");
    parrafoValidado.classList.add("alert-success");

}




//ANOTACIÓN PARA FUTURAS VERSIONES:
//- REDUCIR CODIGO: Hay muchas funciones encadenadas, la validacion del formulario esta separada de la de usuario, email y contraseña.
//- UNA VEZ QUE APARECE EN PANTALLA EL MENSAJE DE ERROR NO SE ELIMINA. (Hacer que se elimine cuando se envia el mensaje de Formulario OK. dato: mensajeValidado())
//- Eliminar comentarios inecesarios. 
//- El boton queda seleccionado con un cuadrado negro cuando lo presionas
//- Sigue tirando mensajes de Errores, deberia eliminar los viejos y poner los nuevos (tanto haya erroes o que el formulario esta bien)