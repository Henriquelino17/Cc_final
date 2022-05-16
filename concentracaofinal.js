function Cc() {
    var cc_inicial = document.getElementById("cc_inicial").value;
    var vazao = document.getElementById("vazao").value;
    var diluiçao = document.getElementById("diluicao").value;
    var X = (vazao/1000)*cc_inicial;
    var Xx = (diluiçao + vazao)/1000;
    var cc_final = X/Xx;
    var round = cc_final.toFixed(2);
    var elemento = document.getElementById("C"); 
    console.log(round);
    elemento.textContent = "A concentração final está em "+ round + " %";
    
    
  }
 