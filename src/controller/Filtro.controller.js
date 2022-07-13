import Requisicoes from "../models/Requisicoes.models.js"



const botaoTodos = document.querySelector(".bttn_Todos")
botaoTodos.addEventListener("click", () =>{
   return  Requisicoes.readAll()
})

function filtrarConcluidos(){
    const filtroTrue = Requisicoes.realAll().filter((event) => {
        return event.habit_status === true
    })
    return filtroTrue
    console.log(filtroTrue)
}

const botaoConcluidos = document.querySelector(".bttn_Concluidos")
botaoConcluidos.addEventListener("click", event =>{
    const listaConcluidos = filtrarConcluidos()
    readAll(listaConcluidos)
})

  