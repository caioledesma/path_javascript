$(function(){
	
	function validarCliqueHover(){	
		$('.artigo1').click(function(){
			$('.artigo2').css('background-color','purple');
		});

		$('.artigo1').hover(function(){
			$('.artigo2').css('background-color','green');
		},function(){
			$('.artigo2').css('background-color','black');
		});
	}
	/* uma forma de usar as funções separadas chamando a mesmo classe ou id do html
	$('textarea').focus(function(){
		console.log("dentro do texto");
	})

	$('textarea').blur(function(){
		console.log("Fora do textarea");
	})
	*/


	function validarFormulario(){
	//tem uma forma mais prática aproveitando o mesmo id ou classe: 

	$('textarea').focus(function(){
		console.log("foco");
	}).blur(function(){
		console.log("Sem foco agora!");
	})

	$('select').change(function(){
		console.log('funcionou a função')
	});

	}

	validarFormulario();
	validarCliqueHover();
});

	//$('div').css('background-color','#ccc'); //div é mais forte que a classe
	//$('.artigo1').css('background-color','black'); //outra forma de direcionar um elemento específico
	//$('.artigo1').css('padding-left','100px').css('background-color','red');
	//com atributos de várioas opções tipo left, right, bottom ou top, tem que especificar

	//$('#teste').css('padding-left','100px').css('background-color','red');//pra chamar pelo id usa o #, no jquery chama-se pelo id

	/*
	setTimeout(function(){
		$('#teste.artigo1').css('background-color','green');
	},2000);
	*/

	/*setTimeout(function(){
		$('.artigo1 p').css('background-color','green'); // para chamar o parágrafo especificamente, pode ser com espaço ou com o sinal >
	},2000);

	console.log($('.artigo1 p').css('color'));//nesse caso ele retorna o valor do atributo 
	*/





	/* Primeira forma de fazer o jqery rodar


	//segunda forma de rodar o jquery
	$(document).ready(function(){
		alert("olá")
	});


	$(window).on('load',function(){

	}); //essa é uma forma mais otimizada de carregar as funcções da página depois que ele carregar tudo 


	*/




