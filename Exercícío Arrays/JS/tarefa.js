
//Declarar a lista de tarefas vazia
let listaTarefasArray = [];

//Recuperando o botão addTarefa
const botaAdicionaTarefa = document.getElementById("btnAddTarefa");

//Inserindo um listener de clicck no botão addTarefa
botaAdicionaTarefa.addEventListener("click", (evt)=>{

    evt.preventDefault();

    //Recuperando o input da tarefa.
    const inputTarefa = document.getElementById("idTarefa");

    //Inserindo no array com o método push o valor digitado no input.
    listaTarefasArray.push(inputTarefa.value);

    //Criando um elemento li
    let li = document.createElement("li");

    //Inserindo o texto no elemento li
    li.textContent = inputTarefa.value;

    //Recuperando a lista de tarefas do HTML:
    const listaTarefasUL = document.getElementById("lista-tarefa");

    //Inserindo o elemento li com o texto na lista ul:
    listaTarefasUL.appendChild(li);

    //Criando o elemento botao
    let botaoExcluir = document.createElement("button");

    //Inserindo o texto no elemento botão
    botaoExcluir.textContent = " x ";

    //Inserindo o elemento botão com o texto no elemento li:
    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{

        listaTarefasArray.forEach(tarefa=>{

            if(evt.target.parentNode.textContent.split(" ")[0] == tarefa){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1)
            }
        })

        evt.target.parentNode.remove();
          //Imprimindo o array e limpando o input tarefa.
        console.log(listaTarefasArray);
    })

    inputTarefa.value = "";

});


// let frase = "Você, não, explicou, muito bem, professor! Mas eu, TE, AMO";

// let novaFraseSplitada = frase.split(" ");
// console.log(novaFraseSplitada);