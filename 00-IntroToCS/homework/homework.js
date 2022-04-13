'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split("");
  var numero = 0;
  for (var i = 0; i < array.length; i++ ) {
    numero = numero + parseInt(array [i] * Math.pow(2, array.length -1 -i));
  }
   
  return numero;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  while(num > 0) {
    binario.push(num % 2);
    num = Math.floor(num / 2);
  } return binario.reverse().join("")

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}