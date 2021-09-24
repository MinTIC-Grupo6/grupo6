function validar_nombre_usuario(string) {
    if (string.length < 6 || string.length > 30) return false;
    if (/^[A-Za-z]+$/g.test(string) === false) return false;
    return true;
}

function validar_contrasena(string) {
    if (string.length < 6) return false;
    if (/^[A-Za-z0-9]+$/g.test(string) === false) return false;
    return true;
}

function confirmar_contrasena(stringA, stringB) {
    const stringAValido = validar_contrasena(stringA);
    const stringBValido = validar_contrasena(stringB);
    
    if ((stringAValido && stringBValido) === false) return false;

    const contrasenasIguales = stringA === stringB;
    return contrasenasIguales;
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
