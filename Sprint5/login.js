let registros = [];

function agregarRegistro() {
    let nombreUsuario = document.getElementById('in_usuario');
    let contrasena = document.getElementById('in_contrasena');
    let confirmarContrasena = document.getElementById('in_confirmar_contrasena');
    
    let newObject = {
        usuario: nombreUsuario.value,
        contrasena: contrasena.value,
        confirmar_contrasena: confirmarContrasena.value
    };
    registros.push(newObject);
}

function validar_captcha(rcaptcha) {
    return 10 / 2 == rcaptcha ? true : false;
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
    let cuenta = registros.find((obj) => obj.usuario == usuario && obj.contrasena == contrasena);
    let captcha = validar_captcha(rcaptcha);
    if (cuenta != undefined && captcha == true) {
        return true;
    } else {
        return false;
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;
