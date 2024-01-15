let valorEnCajaDeTexto = document.getElementById("barraParaEscribir");


let borrarTodo = document.getElementById("borrar").addEventListener("click", function(){
    valorEnCajaDeTexto.value="";
});


  function ingresarValor(valor){

    valorEnCajaDeTexto.value+=valor;
  }

    function calcular(){

      let resultado =  eval(valorEnCajaDeTexto.value);

      console.log(resultado);

      valorEnCajaDeTexto.value=resultado;

      if(resultado==undefined){
           valorEnCajaDeTexto.value=0;
      }

      // console.log(resultado);
      // console.log(valorEnCajaDeTexto.value);

      

       

      
    }

