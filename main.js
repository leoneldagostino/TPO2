
function validar(formulario) {

    if(formulario.usuario.value.trim().length==0){
        document.getElementById("error-usuario").innerHTML="Este Campo es obligatorio";
        
      }
    
    if(formulario.nombre.value.trim().length == 0){
      document.getElementById("error-nombre").innerHTML="Este Campo es obligatorio";
      
    }
    
    let reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reg.test(formulario.correo.value)){
      document.getElementById("error-correo").innerHTML = "Campo invalido";
    }
  
    if(formulario.contrasena.value.trim().length < 7){
      document.getElementById("error-contrasena").innerHTML = "Debe contener al menos 7 caracteres";
    }
  
    if(formulario.contrasena.value != formulario.confirmacion.value){
      document.getElementById("error-confirmacion").innerHTML = "No coincide con la contraseña";
    }
  
}