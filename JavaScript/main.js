window.onload = function(){
	//exemplo de if, else if e else
/*
	let nome = 'Huck';

	if(nome == 'Caio'){
		alert('acertou!')
	}else if(nome == 'Huck'){
		alert('Doguinho')
	}else{
		alert('erroouuuu!')
	}
*/

	// == comparação
	// = atribuição
	// === tem quer ser idêntico, o mesmo valor e o mesmo tipo de variável, tipo string e numero
	let idade = 2020-1989;

	if(idade < 10){
		console.log(idade)
	}else if(idade >= 29){
		console.log('quase')
	}else{
		//alert('bla')
	}

	// != diferente 
	// !== diferente valor e tipo
	let difere = 'Caio'
	if(difere != 'Mariana'){
		console.log('Cabeça!')
	}
}