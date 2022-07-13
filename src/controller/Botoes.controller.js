import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";

const botaoCriar = document.querySelector(".bttn_Criar")
botaoCriar.addEventListener('click', () => {
    Modais.criarHabito()
    document.querySelector(".modal_page").style.display = "block"
    document.querySelector(".btn_fechar").addEventListener("click", ()=>{
        document.querySelector(".modal_page").style.display = "none"
    })
    document.querySelector(".btn_inserir").addEventListener("click", () =>{
        const data = {
            habit_title: "",
            habit_description: "",
            habit_category: ""
        }
        
        Requisicoes.createHabit()
    })
})


// Tabela.botaoEditar.addEventListener("click", () => {
//     Modais.editarHabito()
    
// })

const botaoEditar = document.querySelector(".btn_editar")
botaoEditar.addEventListener("click", () => {
    Modais.editarPerfil()
    document.querySelector(".modal_page").style.display = "block"
    document.querySelector(".btn_fechar").addEventListener("click", () => {
        document.querySelector(".modal_page").style.display = "none"
    }) 
    const botaoSalvar = document.querySelector('.btn_salvar')
    botaoSalvar.addEventListener("click", () => {
        alert("botao correto")
        Requisicoes.updateProfile(foto)
    })

})






body.forEach(elem => {
    elem.addEventListener("click", (event) => {
    const evento = event.target
    console.log(evento.parentNode.parentNode.id)
        if (evento.tagName === "INPUT" && evento.parentNode.parentNode.id !== "") {
            const filhos = evento.parentNode.parentNode.children 
            const arrayFilhos = [...filhos]
            console.log(evento)
            if(arrayFilhos[1].style.textDecoration !== "line-through"){
                arrayFilhos[1].style.textDecoration = "line-through"
            } else if (arrayFilhos[1].style.textDecoration == "line-through"){
                arrayFilhos[1].style.textDecoration = "none"
            }
                       
        }
    })
})




document.querySelector(".button_editar").addEventListener("click", (event) => {
    Modais.editarHabito(event.target.parentNode.parentNode.id)
    document.querySelector(".modal_page").style.display = "block"
})

const body = document.querySelectorAll(".button_check")
body.forEach(elem => {
    elem.addEventListener("click", (event) => {
        // console.log(event.target.parentNode.parentNode.id)
    })
})