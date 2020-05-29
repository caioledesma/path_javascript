window.onload = function(){
	



	//Arrays multidimensional, são as matrizes que eu vi nas aulas de arquitetura

	let matriz = [];

	matriz[0] = []; // Aqui eu to falando que o primeiro array, é um novo array, que vira uma matriz
	matriz[0][2] = 'Caio';

	console.log(matriz[0][2]);// no console isso printa Caio

	matriz.obj = {};//esse é um objeto que é igual a outro objeto 
	matriz.obj.nome = 'Caio teste'; // esse aqui a gente atribuindo uma propriedade pra uma varaiavel do objeto
	console.log(matriz.obj.nome);



	/*

	let obj = {'nome':'caio','idade':30,'func':function(){
		console.log('teste do log');
	}};

	obj.func();//aqui é só eu chamando a função
	console.log(obj.nome);//aqui é eu chamando uma variavel/propriedade do objeto
	// Toda vez que chama função tem que ter o ()

	*/



	/*
	function realizarConta(){
		let nome = "Caio";
		return nome;
	}

	let resultado = realizarConta();
	console.log(resultado);


	// Declarar uma função como/no formato de variavel, atribuir a uma variavel, uma função

	let thor = function(){
		console.log("bichinho que late!")
	}
	thor();
	console.log(typeof(thor));// aparece function no console

	*/

// o parametro da função é oq vai dentro dos (). parametros são variaveis que posso colocar dentro dos () para dar um nome a eles por exemplo..
	/*
	function realizarConta(num1,num2){
		//console.log("minha funcao");
		console.log(num1);
		console.log(num2);
		console.log(num1+num2);
	}

	//realizarConta();//Aqui estou chamando a função no código, aqui estou chamando sem parametro
	realizarConta(10,20)
	*/
	/*
		//quando crio variaveis dentro da funcao, elas só ficam disponiveis dentro dela
		function realizarConta(num1,num2){
			if(num1 !== 10){

		console.log(num1);
		console.log(num2);
		console.log(num1+num2);
			}
	}
	realizarConta(15,20)
	*/


}