'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz2() {

    const [p1, set_p1] = useState(0)
    const [p2, set_p2] = useState(0)
    const [total, set_total] = useState(0)

    const [selecionado, set_selecionado] = useState(["","","",""])
    const [mostraP1, set_mostraP1] = useState(true)
    const [mostraP2, set_mostraP2] = useState(false)

    function Calcular_pontos() {

        let total_atualizado = 0

        if (p1 == 1) {
            total_atualizado = p1+p2
            set_total(total_atualizado)
        }else if (p2 == 1) {
            total_atualizado = p1+p2
            set_total(total_atualizado)
        }
        else{
            set_total(total_atualizado)
        }

        localStorage.setItem("Total" , total_atualizado)

    }

    return ( 
        <div>
            <h1>Quiz Muliru</h1>
            <p>Assina-le a opção correta</p>
            <hr />

            {
                mostraP1 == true &&
                    <div>
                        <h2>Qual a cor do cavalo branco de napoleãum?</h2>
                        <label> <input name="p1" type="radio" onChange={()=> {set_p1(1); set_mostraP2(true); set_mostraP1(false)}} /> Preto</label>
                        <br />
                        <label> <input name="p1" type="radio" onChange={()=> {set_p1(0); set_mostraP2(true); set_mostraP1(false)}}/> Azul</label>
                        <br />
                        <label> <input name="p1" type="radio" onChange={()=> {set_p1(0); set_mostraP2(true); set_mostraP1(false)}}/> Branco</label>
                        <br />
                        <label> <input name="p1" type="radio" onChange={()=> {set_p1(0); set_mostraP2(true); set_mostraP1(false)}}/> Verde</label>
                    </div>
            }
            {
                mostraP2 == true &&
                    <div>
                        <hr />
            
                        <h2>Qual a melhor letra?</h2>
                        <label> <input name="p2" type="radio" onChange={()=> set_p2(0)}/> G</label>
                        <br />
                        <label> <input name="p2" type="radio" onChange={()=> set_p2(1)}/> M</label>
                        <br />
                        <label> <input name="p2" type="radio" onChange={()=> set_p2(0)}/> Y</label>
                        <br />
                        <label> <input name="p2" type="radio" onChange={()=> set_p2(0)} /> X</label>
                    </div>
                
            }
            
            <hr />
            <button onClick={()=> Calcular_pontos()}>Enviar respostas</button>
            <p>Total de Pontos: {total}</p>

        </div>
     )
}

export default Quiz2;