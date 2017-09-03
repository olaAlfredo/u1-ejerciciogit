/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var formulario=document.formulario_articulo,
	elementos=formulario.elements;
    
    

  
  
  var enviar=function(e){
        if(!validarInputs()){
           console.log('Falto validar los Inputs');
           e.preventDefault();
        } else if(!validarSelect()){
           console.log('Falto validar los Select');
           e.preventDefault();
        }else{
        	console.log('Envia correctamente');
            //Comentar línea cuando se tenga el formulario listo
        	e.preventDefault();
        }
    };
  
      //Funciones Blur y Focus
    var focusInput = function(){
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error","");
    };

    var blurInput = function(){
        if(this.value <=0){
        	this.parentElement.children[1].className = "label";
        	this.parentElement.children[0].className = this.parentElement.children[0].className + "error";
        }
    };
	//Events
	formulario.addEventListener("submit",enviar);

	for (var i=0;i<elementos.length;i++){
		if(elementos[i].type == "text" ){
			elementos[i].addEventListener("focus", focusInput);
			elementos[i].addEventListener("blur", blurInput);
		}
	}
        
 //indice = document.getElementById("opciones").selectedIndex;
//if( indice == null || indice == 0 ) {
 // alert("Debe Seleccionar una Marca");
//}
    
  }())