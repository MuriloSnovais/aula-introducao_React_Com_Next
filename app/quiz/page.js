'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz() {

    const [p1, set_p1] = useState(0)
    const [p2, set_p2] = useState(0)
    const [p3, set_p3] = useState(0)
    const [p4, set_p4] = useState("")
    const [total, set_total] = useState(0)

    const [selecionado, set_selecionado] = useState(["","","",""])

    function Calcular_pontos() {
        if (p4 == "Berserk") {
            set_total(p1+p2+p3+1)
        }else{
            set_total(p1+p2+p3)
        }
    }

    return ( 
        <div>
            <h1>Quiz Muliru</h1>
            <p>Assina-le a opção correta</p>
            <hr />

            <h2>Qual a cor do cavalo branco de napoleãum?</h2>
            <label> <input name="p1" type="radio" onChange={()=> set_p1(1)} /> Preto</label>
            <br />
            <label> <input name="p1" type="radio" onChange={()=> set_p1(0)}/> Azul</label>
            <br />
            <label> <input name="p1" type="radio" onChange={()=> set_p1(0)}/> Branco</label>
            <br />
            <label> <input name="p1" type="radio" onChange={()=> set_p1(0)}/> Verde</label>
            
            <hr />

            <h2>Qual a melhor letra?</h2>
            <label> <input name="p2" type="radio" onChange={()=> set_p2(0)}/> G</label>
            <br />
            <label> <input name="p2" type="radio" onChange={()=> set_p2(1)}/> M</label>
            <br />
            <label> <input name="p2" type="radio" onChange={()=> set_p2(0)}/> Y</label>
            <br />
            <label> <input name="p2" type="radio" onChange={()=> set_p2(0)} /> X</label>

            <hr />

            <h2>Quanto é dez + 10</h2>
            <p className={selecionado[0]} onClick={()=> {set_p3(0); set_selecionado(["selecionado","","",""])} }>40</p>
            <p className={selecionado[1]} onClick={()=> {set_p3(0); set_selecionado(["","selecionado","",""])} }>19785</p>
            <p className={selecionado[2]} onClick={()=> {set_p3(0); set_selecionado(["","","selecionado",""])} }>-10</p>
            <p className={selecionado[3]} onClick={()=> {set_p3(1); set_selecionado(["","","","selecionado"])} }>20</p>

            <h2>Qual o melhor Anime</h2>

            <input name="p4" onChange={(e)=> set_p4(e.target.value)} />

            <hr />
            <button onClick={()=> Calcular_pontos()}>Enviar respostas</button>

            <p>Total de Pontos: {total}</p>
            
        </div>
     )
}

export default Quiz;