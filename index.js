var escolha = document.querySelector("#define");
var incrementoCifra = document.querySelector("#incrementoCifra");
var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");
var inputEscolhas = document.querySelectorAll(".radio");
var btnEnvio = document.querySelector("#btnEnvio");
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-";

/*Incremento da Cifra de Cesar*/
escolha.addEventListener("change", function(){
    if(define.value == "cifra"){
        incrementoCifra.style.display = "block"
    }else{
        incrementoCifra.style.display = "none"
    }
});

/*Botão de envio mensagem para codificar e/ou decodificar*/
codificar.addEventListener("click", function(){
    btnEnvio.innerText = "Codificar Mensagem";
});

decodificar.addEventListener("click", function(){
        btnEnvio.innerText = "Decodificar Mensagem";
    });


function cifraDeCesar(str,chave){
    var mensagemResultado = ""
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < alfabeto.length; j++)
          if (str[i] == alfabeto[j]) {
            mensagemResultado += alfabeto[j + parseInt(chave)];
            break;
          } else if (str[i] == " ") {
            mensagemResultado += " ";
            break;
          }
      }
      return mensagemResultado;
    }

function decCifraDeCesar(str,chave){
    var mensagemResultado = ""
    for (var i = 0; i < str.length; i++) {
        for (var j = alfabeto.length; j >= 0; j--)
          if (str[i] == alfabeto[j]) {
            mensagemResultado += alfabeto[j - parseInt(chave)];
            break;
          } else if (str[i] == " ") {
            mensagemResultado += " ";
            break;
          }
      }
      return mensagemResultado;
    }

var resultadoMensagem = document.querySelector(".resultadoFinal");
var mensagemSaida = document.querySelector("#resultadoMensagem");

btnEnvio.addEventListener("click",function(e){
    e.preventDefault();

    if(escolha.value == "base"){
        var mensagemEntrada = document.querySelector("#texto").value;
        if(codificar.checked === true){
            mensagemSaida.innerText = btoa(mensagemEntrada);
        }else{
            mensagemSaida.innerText = atob(mensagemEntrada);
        }
    }else if(escolha.value == "cifra"){
        
        if (codificar.checked === true){
            
            var mensagemEntrada = document.querySelector("#texto").value;
            console.log(mensagemEntrada)
            var incrementoCifra = parseInt(document.querySelector("#incremento").value);
            console.log(incrementoCifra)
            mensagemSaida.innerText = cifraDeCesar(mensagemEntrada,incrementoCifra);
        }else{
            var mensagemEntrada = document.querySelector("#texto").value;
            var incrementoCifra = parseInt(document.querySelector("#incremento").value);
            
            mensagemSaida.innerText = decCifraDeCesar(mensagemEntrada,incrementoCifra);
        }
    }

});