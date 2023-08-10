
// console.log("Hello World!");

// //Declarando um array de nomes de pessoas
// let nomes = ["Diego", "Gabriel", "Lucas"];
// //Impriindo o array
// console.log(nomes);

// //Imprimindo o primeiro nome do array
// console.log(nomes[0]);

// //Quebrando linha no console do navegador com \n
// console.log("Quebrando linha \n");
// console.log("\n");
// //Imprimindo o array usando um loop for
// for (let i = 0; i < nomes.length; i++) {
    

// let nomes = ["Diego", "Gabriel", "Lucas"];

// // console.log(nomes);

// console.log("Índice: ")
// console.log(nomes[0]);


// console.log("\nImprimindo array com loop for:");
// for (let i = 0; i < nomes.length; i++) {

//     if (nomes[i] == "Gabriel") {
//         break;
//     } else {
//         console.log(nomes[i]);
//     }

// }
// console.log("\n");
// //Imprimindo o array usando um loop forEch

// }

// console.log("\nImprimindo o array usando um loop forEach:");

// nomes.forEach(function (nome) {
//     if (nome == "Gabriel") {
//         return true;
//     } else {
//         console.log(nome);
//     }
// });



// //Declaração de um array objetos alunos.
// let alunos = [
//     { nome: "Diego", idade: 23, peso: 80.5 },
//     { nome: "Gabriel", idade: 15, peso: 60.5 },
//     { nome: "Lucas", idade: 30, peso: 90.5 }
// ];

// console.log("\n");

// //Imprimindo o array de objetos
// console.log(alunos);

// console.log("\n");

// //Imprimindo o primeiro objeto do array
// console.log(alunos[0]);
// console.log("\n");
// //Impriindo o nome do primeiro objeto do array
// console.log(alunos[0].nome)
// console.log("\n");
// //Imprimindo o nome, idade e peso do primeiro objeto de todos os objetos do array

// let alunos = [
//     {nome: "Diego", idade: 23, peso: 80.5},
//     {nome: "Gabriel", idade: 15, peso: 60.5},
//     {nome: "Lucas", idade: 30, peso: 90.5}
// ]

// console.log("Declaração de um array objetos alunos:")
// console.log(alunos);

// console.log("\nImprimindo o primeiro objeto do array:")
// console.log(alunos[0]);

// console.log("\nImprimindo o nome do objeto do array:")

// console.log(alunos[0].nome, alunos[0].idade, alunos[0].peso);
// console.log(alunos[1].nome, alunos[1].idade, alunos[1].peso);
// console.log(alunos[2].nome, alunos[2].idade, alunos[2].peso);


// console.log("\n");

// //Imprimindo o nome, idade e peso de todos os objetos do array usando o valor da propriedade como String
// let propriedade = "nome";
// console.log(alunos[0][propriedade], alunos[0]["idade"], alunos[0]["peso"]);
// console.log(alunos[1][propriedade], alunos[1]["idade"], alunos[1]["peso"]);
// console.log(alunos[2][propriedade], alunos[2]["idade"], alunos[2]["peso"]);

// console.log("\n");

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for
// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// } //For

// console.log("\n");

// // //Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
// // alunos.forEach(function (aluno) {
// //     console.log(aluno.nome, aluno.idade, aluno.peso);
// // });//Função anônima

// // console.log("\n");

// // //Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
// // alunos.forEach(aluno => {
// //     console.log(aluno.nome, aluno.idade, aluno.peso);
// // } );//Arrow function

// // console.log("\n");

// // //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for of
// // for (let aluno of alunos) {
// //     console.log(aluno.nome, aluno.idade, aluno.peso);
// // }//For of

// // console.log("\n");

// // //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for in
// // for (let i in alunos) {
// //     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// // } //For in

// //Declando um array de nomes de pessoas
// // let nomes = ["Diego", "Gabriel", "Lucas"];
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Inserindo um novo nome no final do array utilizando o método push
// nomes.push("João");
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Inserindo um novo nome no final do array utilizando o método push e passando com variável
// let nome = "Maria";
// nomes.push(nome);
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando o valor da propriedade como String")
// let propriedade = "nome";
// console.log(alunos[0]["nome"], alunos[0]["idade"], alunos[0]["peso"]);
// console.log(alunos[1]["nome"], alunos[1]["idade"], alunos[1]["peso"]);
// console.log(alunos[2]["nome"], alunos[2]["idade"], alunos[2]["peso"]);

// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for")
// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// }

// //Função anônima
// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop forEach")
// alunos.forEach(function (aluno) {
//     console.log(aluno.nome, aluno.idade, aluno.peso)
// });

// //Arrow function
// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop forEach")
// alunos.forEach(aluno => {
//     console.log(aluno.nome, aluno.idade, aluno.peso);
// });

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for of
// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for of")
// for (let aluno of alunos) {
//     console.log(aluno.nome, aluno.idade, aluno.peso);
// }

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for in
// console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for in")
// for (let i in alunos) {
//     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// }

// let nomes = ["Diego", "Gabriel", "Lucas"];
// console.log(nomes);

// console.log("\nInserindo um novo nome no final do array utilizando array")
// nomes.push("João");
// console.log(nomes);


// //Inserindo um novo nome no início do array utilizando o método unshift, pegando o valor da variável nome que recebeu o valor do input.

// //Recuperando o botão submit do form
// let botao = document.querySelector("#btnSubmit");

// //Adicionando um evento de click ao botão de submit, utilizando uma arrow function
// botao.addEventListener("click", () => {

//     //Recuperando o valor do input de email e armazenando na variável email
//     let email = document.querySelector("#idEmail").value;
//     //Recuperando o valor do input de txtTel e armazenando na variável telefone
//     let telefone = document.querySelector("#idTel").value;

//     //Adicionando a variável email no inicio do array nomes.
//     nomes.unshift(email);

//     //Limpar o input de email.
//     document.querySelector("#idEmail").value = "";
//     //Limpar o input de telefone.
//     document.querySelector("#idTel").value = "";

//     //Imprimindo o array
//     console.log(nomes);
//     console.log("\n");

//     //Imprimindo o array na div com id="lista" um embaixo do outro
//     document.querySelector("#lista").innerHTML = nomes.join("<br>");
// });


// //Removendo o último elemento do array utilizando o método pop
// nomes.pop();
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Removendo o primeiro elemento do array utilizando o método shift
// nomes.shift();
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Colocando em ordem alfabética o array utilizando o método sort
// nomes.sort();
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Revertendo a ordem do array utilizando o método reverse
// nomes.reverse();
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Recuperando o botão ordenar do form

//     let email = document.querySelector("#idEmail").value;
//     let telefone = document.querySelector("#idTel").value;

//     //Adicionando a variável email no início do array nomes
//     nomes.unshift(email);

//     //Limpar o input de email
//     document.querySelector("#idEmail").value = "";

//     //Limpar o input de telefone
//     document.querySelector("#idTel").value = "";

//      //Imprimindo o array
//      console.log(nomes);
//      console.log("\n");


// // //Removendo o último elemento do array com pop
// // console.log("\nRemovendo o último elemento do array com pop")
// // nomes.pop();
// // console.log(nomes);

// // //Removendo o primeiro elemento do array com shift
// // console.log("\nRemovendo o primeiro elemento do array com shift")
// // nomes.shift();
// // console.log(nomes);

// //Colocando em ordem alfabética o array com sort
// console.log("\nColocando em ordem alfabética o array com sort");
// nomes.sort();
// console.log(nomes);

// //Recuperando o botão ordenar do form
// console.log("\nRecuperando o botão ordenar do form")

// let botaoOrdenar = document.querySelector("#btnOrdenar");

// //Adicionando um evento de click ao botão de ordenar, utilizando uma arrow function
// botaoOrdenar.addEventListener("click", () => {
//     //Ordenando o array em ordem alfabética
//     nomes.sort();
//     //Imprimindo o array
//     console.log(nomes);
//     console.log("\n");


//     //Imprimindo o array na div com id="lista" um embaixo do outro

//     //Imprimindo o array na div com id="lista"

//     document.querySelector("#lista").innerHTML = nomes.join("<br>");
// });


// //Alterando o valor de um elemento do array utilizando o método splice

// nomes.splice(1, 1, "Maria");
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Alterando o valor de dois elementos do array utilizando o método splice
// nomes.splice(1, 2, "Tuca", "Jorge");
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// //Alterando o valor de um elemento do array utilizando o método splice
// nomes.splice(1, 1);
// //Imprimindo o array
// console.log(nomes);
// console.log("\n");

// console.log("\nAlterando o valor de um elemento do array utilizando o método splice");
// nomes.splice(1, 1, "Maria");
// console.log(nomes);

// const cursos = [
//     { nome: "HTML5", duracao: "3 meses"},
//     { nome: "CSS3", duracao: "4 meses"},
//     { nome: "JavaScript", duracao: "6 meses"}
// ];

// //Declarar um objeto
// const curso = {
//     nome: "PYTHON",
//     duracao: "7 meses"
// };

// //Inserindo o objeto no array com push
// cursos.push(curso);
// //Imprimindo o array
// console.log(cursos);
// //Quebrando a linha
// console.log("\n");

// //Iterando o array com map
// console.log("\nIterando o array com map");
// cursos.map((curso) => {
//     console.log(curso.nome);
// });

// let nomesCursos = cursos.map((curso) => curso.nome);
// console.log(nomesCursos);

// //Iterando o array com forEach
// console.log("\nIterando o array com forEach");
// let nomesCursos2 = cursos.forEach((curso) =>{ return curso.nome});
// console.log(nomesCursos2);

// //Declarar um array de categorias de tarefas.
// const categorias = ["Trabalho", "Estudos", "Casa", "Lazer", "Esportes"];

// //Recuperar o select de categorias
// const selectCategoria = document.querySelector("#idCategoria");



// categorias.forEach((categoria,index)=>{
//     let optionCategoria = document.createElement("option");
//     optionCategoria.textContent = categoria;
//     optionCategoria.value = (index+1);
//     selectCategoria.appendChild(optionCategoria);
// });

// let categoriasPares = categorias.filter((categoria,index) =>{
//     return index % 2 == 0;
// });
// console.log(categoriasPares);

// //Declarar um array de objetos com nome de usuário e senha
// const usuarios = [
//     {nome: "Maria", senha: "123456"},
//     {nome: "João", senha: "123456"},
//     {nome: "José", senha: "123456"}
// ];

// let usuarioLogado;

// function validarUsuario(nmUser, senhaUser){
// //Declarar uma variável para armazenar o objeto do usuário logado e validar com filter:
// usuarioLogado = usuarios.filter((usuario) => {
// return usuario.nome == nmUser && usuario.senha == senhaUser;
// });
// }

// addEventListener("click", () => {
//     console.log(usuarioLogado);
// });


const cursos = [
    { nome: "HTML5", duracao: "3 meses"},
    { nome: "CSS3", duracao: "4 meses"},
    { nome: "JavaScript", duracao: "6 meses"}
];

//Exemplo de SPREAD
// const curso = cursos[0];
// const curso2 = {...curso, descricao: "Curso de HTML5"};
// console.log(curso2);


let cursos2 = cursos.map((curso) =>{ 
    return {...curso, descricao: "Curso de " + curso.nome};
});

console.log(cursos2);

//Exemplo de REST

let pessoa = {nome: "Maria", idade: 25, endereco: "Rua 1", telefone: "999999999"};

let {nome, idade, ...resto} = pessoa;

console.log(nome);
console.log(idade);
console.log(resto);

//Exemplo de DESTRUCTURING
const {nome: nome2, idade: idade2, endereco: endereco2, telefone: telefone2} = pessoa;

console.log(nome2);
console.log(idade2);
console.log(endereco2);


 