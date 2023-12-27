const inputText = document.querySelector(".texto-input")
const adicionarItem = document.querySelector(".adicionar-item")
const listaCompleta = document.querySelector("ul")


let listaItem = []


function adicionarItemNaLi() {
    if (inputText.value === "") {
        alert("Você deve digitar uma tarefa!")
    } else {
        listaItem.push(
            {tarefa: inputText.value,
             concluida: false
            })
    }
    inputText.value = ""
    mostrarTarefa()

    localStorage.setItem("lista", JSON.stringify(listaItem))

}


function tarefaConcluida(index) {
    listaItem[index].concluida = !listaItem[index].concluida
    mostrarTarefa()
}

function deletarItem(index) {
    listaItem.splice(index, 1)

    mostrarTarefa()
}

function mostrarTarefa() {


    let novaLi = ""

    listaItem.forEach((item, index) => {
        novaLi += `
        <li class="tasks ${item.concluida && "done"}">
            <button class="buttom-item" onclick="tarefaConcluida(${index})">marcar</button>
            <p class="content-item">${item.tarefa}</p>
            <button  class="buttom-item" onclick="deletarItem(${index})">deletar</button>
        </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem("lista")

    if(tarefasDoLocalStorage){
        listaItem = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefa()
}

recarregarTarefas()
adicionarItem.addEventListener("click", adicionarItemNaLi)