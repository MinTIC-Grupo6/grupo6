
// La siguiente funcion valida el elemento input
function validar_nombre_usuario(string)

     {    
        // Variable que usaremos para determinar si el input es valido
        //let isValid = false;
  
        // El input que queremos validar
      //  const input = document.getElementById('in_nombre_usuario');
  
        //El div con el mensaje de advertencia:
       // const message = document.getElementById('mensaje');
  
        //input.willValidate = false;
  input=string;
        // El tamaño maximo para nuestro input
        const maximo = 30;
        const minimo = 6;
        // El pattern que vamos a comprobar
        const pattern = /^([a-zA-ZñÑ]){6,30}$/;
  
        // Primera validacion, si input es menor que 6
        if(input.length<minimo) {
          isValid = false;
        } else {
          // Segunda validacion, si input es mayor que 30
          if(input.length > maximo) {
            isValid = false;
          } else {
            // Tercera validacion, si input contiene los caracteres  permitidos
            if(input.length>=minimo && input.length<=maximo){ 
            
              isValid = true;
            } else {
              // Si no  pasamos todas la validaciones anteriores, entonces el input es valido
              isValid = false;
            }
          }
        }
  
          //Ahora coloreamos el borde de nuestro input
          /*  if(!isValid) {
          // rojo: no es valido
          input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
          // mostramos mensaje
          message.hidden = false;
        } else {
          // verde: si es valido
          input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
          // ocultamos mensaje;
          message.hidden = true;
        }*/
  
        // devolvemos el valor de isValid
        return isValid;
      }
  
      // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
      /*function verificar() 
      {
        const valido = validar_nombre_usuario();
        if (!valido) {
          //alert('El campo no es válido.');
          return false;
        } else {
          //alert('El campo es válido');
          return true; 
        }
      }*/


function validar_contrasena(password)
{
   //const valido = document.getElementById('in_contrasena');
   let valido=password;
    const maximop = 30;
    const minimop = 6;
    console.log(valido.length);
         //   regex = /^([a-zA-Z0-9]){6,30}$/;

         // Primera validacion, si valido es menor que 6
         
          // Tercera validacion, si valido contiene los caracteres  permitidos
          if(valido.length >= minimop && valido.length <= maximop)
          { 
            isValidpas = true;
          } else {
            // Si no  pasamos todas la validaciones anteriores, entonces el valido es invalido
           isValidpas = false;
          } 
   
   
  return isValidpas;
}

function confirmar_contrasena2(stringA,stringB) 

{
 /* document.getElementById('in_confirmar_contrasena');          
        
          regex = /^([a-zA-Z0-9]){6,30}$/;
          */

    //Se muestra un texto válido/inválido a modo de ejemplo
    console.log("StringA: "+stringA);
    console.log("StringB: "+stringB);
 
  if (stringA != stringB)
   {
      // valido = document.getElementById('campo2OK'),
       //valido.innerText = "incorrecto";
       return false;
    }   else
     {

         //valido = document.getElementById('campo2OK'),
        // valido.innerText = "válido";
         return true; 
     }
}
function confirmar_contrasena(num1,num2)
{
if(num1==5)
{
  console.log(num1*10);
}

}
/*
module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
*/