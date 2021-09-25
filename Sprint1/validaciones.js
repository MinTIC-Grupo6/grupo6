function validar_nombre_usuario(string){
    // Implementación

    var usuario = string;
    var regxp = /^([a-zA-Z_-]){1,30}$/;
    var bool = false;

    if(regxp.test(usuario.value)==true){
        
        if(usuario.length<6){
            bool = false;
        }
        else{
            bool = true;
        }

    }
    else{
        bool = false;
    }
    return bool;
}
function validar_contrasena(string) {
    // Implementación

    var contrasena = string;
    var regxp = /^([a-zA-Z0-9_-]){1,30}$/;
    var bool = false

    if(regxp.test(contrasena.value)==true){
       
        bool = true;
    }
    else{
        bool = false; 
    }

    return bool;
}
function confirmar_contrasena(stringA, stringB){
    // Implementación

    var contrasena = stringA;
    var confirmar = stringB;
    var bool = false;

    if(validar_contrasena(stringA)){

        if(contrasena==confirmar){
            bool = true;
        }
        else{
            bool = false;
        } 
    }
    else {
        bool = false;
    }
    return bool;
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;


/* console.log(validar_nombre_usuario("Juan"));
console.log(validar_contrasena("123Juan"));
console.log(confirmar_contrasena("123Juan","123Juan")); */