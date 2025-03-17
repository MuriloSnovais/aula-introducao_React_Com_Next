'use client'

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import "./painel.css"
import { Trykker } from "next/font/google";

export default function Painel(){

    const [usuario, set_usuario] = useState("")
    const [senha, set_senha] = useState("")
    
    const [mostra_erro, set_mostra_erro] = useState(false)
    const [mostra_acerto, set_mostra_acerto] = useState(false)

     
    // const notify = () => toast("Acesso De adiministrador Liberado!");
    // const notify2 = () => toast.error("Acesso De adiministrador Negado!");

    function verifica_usuario() {
        if (usuario == 'MulirinADM' && senha == "adm123"){
            set_mostra_acerto(true)
            set_mostra_erro(false)
        }
        else if(usuario == "" && senha == ""){
            set_mostra_erro(false)
            set_mostra_acerto(false)
        }else{
            set_mostra_erro(true)
            set_mostra_acerto(false)
        }
        
    }

    return(
        <div>
            <h1>Painel de administrador</h1>

            <form>

            <label>
                Digite o usuario:
                <input type="email" onChange={(e)=> set_usuario(e.target.value)}/>
            </label>
            
            <br/>

            <label>
                Digite a senha:
                <input type="password" onChange={(e)=> set_senha(e.target.value)}/>
            </label>

            
            <br/>

            <button onClick={()=> verifica_usuario()}>Entrar</button>
            
            </form>
            {
                mostra_erro == true ? 
                <div className="erro">
                    <p>Usuario ou senha incorreta</p>
                </div>
                :
                    <div></div>  
            }
            {
                mostra_acerto == true ?
                <div className="acerto">
                    <p>Usuario Logado com sucesso!</p>
                </div>
                :
                    <div></div> 

            }



            <ToastContainer/>
        </div>
    )
}