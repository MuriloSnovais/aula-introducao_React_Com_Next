// Criando uma nova página, obrigatoriamente tem que ter o nome page.js
'use client'
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

// A função tem que ter o nome da pasta, obrigatoriamente tem que ser em maiusculo a primeira letra
// certo: Contato errado: contato

export default function Contato(){

    const notify = () => toast("Wow so easy!");
    const notify2 = () => toast.error("Jão");
    const [nome , set_nome] = useState("")
    const [mensagem , set_mensagem] = useState("")
    
    // Esta função esta recebendo um argumento, que no caso é o evento
    function envia_mensagem(evento){
        
        // Colocando o que o argumento vai fazer dentro da função
        evento.preventDefault()

        if (nome == "" || mensagem == "") {
            notify2()
        }
        else{
            notify()
        }
    }

    return(
        <div>
            <h1>Página de contato</h1>
            <p>Entre em contato conosco</p>

            <hr/>

            {/* onSubmite para enviar mensagem, tem que ser no form */}
            <form onSubmit={(evento)=> envia_mensagem(evento)}>
                <label>
                    Digite seu nome:
                    {/* onChange para guardar cada letra que o usuario escreve, ao inves de apenas quando ela clicar para enviar */}
                    <input onChange={(evento)=> set_nome(evento.target.value)}/>
                    
                    {/* evento onde a ação guarda tudo / evento pode ser abreviado como (e) */}
                    {/* evento.target.value para pegar o que o usuario escreveu */}
                </label>

                <br/>
                
                <label>
                    Digite sua mensagem:
                    <input onChange={(evento)=> set_mensagem(evento.target.value)}/>
                    
                </label>

                <br/>
                
                <button>Enviar</button>
                <ToastContainer/>
            </form>

        </div>

    )
}