




function clicou(){
	//console.log("botão ta vivo!")
	document.getElementById('agradecimento').innerHTML = "<b>Obrigado pelo clique</b>";
	//document.getElementById('agradecimento').innerHTML = "<button>botão de teste</button>";
	//innerHTML ele coloca um html dentro do documento 
	//console.log(document.getElementById('agradecimento'));

}

function redirecionar(){
	window.open("http://www.google.com");//uam forma de colocar link como função
	window.open.location.href = "http://www.google.com";//outra forma, se tiver o .href ele abre na mesma janela
}

// function mouse(){
// 	document.getElementById("id_p_mouse").innerHTML = "Obrigado por passar o mouse";
// }

// function voltar(){
// 	document.getElementById("id_p_mouse").innerHTML = "Passe o mouse aqui";
// }

//outra forma de fazer usando o this

function mouse(elemento){
	elemento.innerHTML = "Obrigado por passar o mouse";
}

 function voltar(elemento){
 	elemento.innerHTML = "Passe o mouse aqui";
 }

 function onload(){
	alert("carregou!");
}

function funcaoChange(elemento){
	console.log(elemento.value);//com o .value no final do console log ele printa o valor escolhido pelo usuário
}

/*
Um exemplo de função com IF e com variáveis fora da função
function validaIdade(idade){
	if (idade >=18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}


var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/



/*
// Funções, quando criamos a função a gente decreve o que aquele bloco de código precisa fazer e podemos passar parametros para ele dentro dos parênteses ( ), como no exemplo abaixo, separo eles por vírgulas e depois quando for chamar a função falo "o que" são esses parâmetros. 5 é o parametro n1 e o 10 é o parametro n2
function soma(n1, n2){
	return n1 + n2;
}

console.log(soma(5, 10));
// resultado 15
*/

/* Função replace
function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);

}

console.log(setReplace("Aqui é a frase", "frase", "foi trocado"))
// Aqui é a foi trocado - resultado da operação de cima
*/



/* Trabalhando com datas
var d = new Date();
alert(d);
console.log(d.getDate());
console.log(d.getMinutes());
console.log(d.getDay());
alert(d.getDate());
*/


/*
var count;
for(count=0; count <= 5; count++){
	console.log(count);
	if(count>=5)	
	alert('final!')
}
*/


//Função while
/*
var conta = 0;
while (conta <= 5){
	console.log(conta);
	alert(conta);
	conta++;
}
*/



/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/



//Lista de Dicionario
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[0].cor);
*/


/* Dicionário
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//Lista
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();


//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//alert(lista[1]);



/*
var nome = "Caio Ledesma";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

console.log(nome);
console.log(idade);
console.log(frase.toUpperCase()); //tem o LowerCase tb

//console.log(frase.replace("Japão", "brasil")); //Qauando for usar replace tem que ser exatamente igual a forma escrita
//alert(frase.replace("Japão", "Brasil"))
//alert(idade + idade2);
//alert("bem vindo " + nome + " " + idade); 
/* Comentário para mais de uma linha */

