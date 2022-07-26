import Requisicoes from "../models/Requisicoes.models.js";
import Modais from "../controller/Modais.controller.js";

export default class Botoes {
    static botãoCriar() {
        const botaoCriar = document.querySelector(".bttn_Criar")
        botaoCriar.addEventListener('click', () => {
            Modais.criarHabito()
            document.querySelector(".modal_page").style.display = "block"
            document.querySelector(".btn_fechar").addEventListener("click", ()=>{
                document.querySelector(".modal_page").style.display = "none"
            })
            document.querySelector(".btn_inserir").addEventListener("click", () =>{
            
                
                Requisicoes.createHabit()
            })
        })
    }

    static botaoEditarPerfil() {
        const botaoEditar = document.querySelector(".btn_editar")
        botaoEditar.addEventListener("click", () => {
            Modais.editarPerfil()
            document.querySelector(".modal_page").style.display = "block"
            document.querySelector(".btn_fechar").addEventListener("click", () => {
                document.querySelector(".modal_page").style.display = "none"
            }) 
            const botaoSalvar = document.querySelector('.btn_salvar')
            botaoSalvar.addEventListener("click", () => {
                const inputImagem = document.querySelector('.principal_imagem')
                const foto = {
                    usr_image: ""
                }
                if (inputImagem.value !== "") {
                    foto.usr_image = inputImagem.value
                    console.log(foto)
                    Requisicoes.updateProfile(foto)
                } else {alert("Coloque uma url de uma imagem")}
            })
        
        })
    }

    static botaoLogout () {
        const botaoLogout = document.querySelector(".btn_logout")
        botaoLogout.addEventListener("click", () => {
            localStorage.clear()
            window.location.replace("./src/views/login.views.html")
        })
    }

    static botaoCriarHabito() {
        const botaoCriar = document.querySelector(".bttn_Criar")
        botaoCriar.addEventListener('click', () => {
            Modais.criarHabito()
            document.querySelector(".modal_page").style.display = "block"
            document.querySelector(".btn_fechar").addEventListener("click", ()=>{
                document.querySelector(".modal_page").style.display = "none"
            })
            document.querySelector(".btn_inserir").addEventListener("click", async () =>{
                const titulo = document.querySelector(".input_titulo").value
                const descricao = document.querySelector(".input_descricao").value
                const selecao = document.querySelectorAll(".selecao")
                const data = {
                    habit_title: titulo,
                    habit_description: descricao,
                    habit_category: selecao[0].value
                }
                
                await Requisicoes.createHabit(data)
                document.location.reload(true)
            })
        })
    }

    static botaoCheck () {
        const check = document.querySelectorAll(".button_check")
    check.forEach(elem => {
        elem.addEventListener("click", (event) => {
        const evento = event.target
        const id = evento.parentNode.parentNode.id
            if (evento.tagName === "INPUT" && evento.parentNode.parentNode.id !== "") {
                const filhos = evento.parentNode.parentNode.children 
                const arrayFilhos = [...filhos]
                console.log(evento)
                if(arrayFilhos[1].style.textDecoration !== "line-through"){
                    arrayFilhos[1].style.textDecoration = "line-through"
                    Requisicoes.completeHabit(id)
                } 
                        
                }
            })
        })
    }

    static botaoEditarTarefa() {
        const editar = document.querySelectorAll(".button_editar")
        
        editar.forEach(elem => {
            elem.addEventListener("click", (event) => {
                const id = event.target.parentNode.parentNode.id
                const tarefa = event.target.parentNode.parentNode
                const tituloTarefa = tarefa.querySelector(".tarefas").innerText
                const descricaoTarefa = tarefa.querySelector(".descricao").innerText
                const selecaoTarefa = tarefa.querySelector(".categoria").innerText

                Modais.editarHabito(tituloTarefa, descricaoTarefa, selecaoTarefa)

                document.querySelector(".modal_page").style.display = "block"
                document.querySelector(".btn_fechar").addEventListener("click", () => {
                    const modal = document.querySelector(".modal_page")
                    modal.innerText = ""
                    modal.style.display = "none"
                })
                document.querySelector(".btn_excluir").addEventListener("click", () =>{
                    Modais.excluirHabito()
                    document.querySelector(".modal_page").style.display = "block"
                    document.querySelector(".btn_cancelar").addEventListener("click", () =>{
                        document.querySelector(".modal_page").style.display = "none" 
                    })
                    document.querySelector(".btn_sim").addEventListener("click", async ()=>{
                            
                            await Requisicoes.deleteHabit(id)
                            document.location.reload(true)
                            document.querySelector(".modal_page").style.display = "none"
                    })
                })

                document.querySelector(".btn_alterar").addEventListener("click", async () => {
                    const titulo = document.querySelector(".input_titulo").value
                    const descricao = document.querySelector(".input_descricao").value
                    const selecao = document.querySelectorAll(".selecao")
                    const data = {
                        habit_title: titulo,
                        habit_description: descricao,
                        habit_category: selecao[0].value
                      }
                    const status = await Requisicoes.updateHabit(id, data)
                    console.log(status)
                    if (status.message) {
                        Botoes.erroSalvarAlteracoes(status.message)
                    } else {
                        document.location.reload(true)
                    }
                })
            })
        
        })
    }
    
    static erroSalvarAlteracoes(erro) {
        console.log(erro)
    }
}
