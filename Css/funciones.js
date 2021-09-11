function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }
  
  
  //Eventos de click
    uno.onclick = function(e){
        resultado.value = resultado.value  + "1";
    }
    dos.onclick = function(e){
        resultado.value = resultado.value  + "2";
    }
    tres.onclick = function(e){
        resultado.value = resultado.value  + "3";
    }
    cuatro.onclick = function(e){
        resultado.value = resultado.value  + "4";
    }
    cinco.onclick = function(e){
        resultado.value = resultado.value  + "5";
    }
    seis.onclick = function(e){
        resultado.value = resultado.value  + "6";
    }
    siete.onclick = function(e){
        resultado.value = resultado.value  + "7";
    }
    ocho.onclick = function(e){
        resultado.value = resultado.value  + "8";
    }
    nueve.onclick = function(e){
        resultado.value = resultado.value  + "9";
    }
    cero.onclick = function(e){
        resultado.value = resultado.value  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.value;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.value;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.value;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.value;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.value;
        resolver();
    }
  
  function limpiar(){
    resultado.value = "";
  }
  function resetear(){
    resultado.value = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  
  
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.value = res;
  }