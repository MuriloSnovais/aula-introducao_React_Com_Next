'use client'

import { useState } from "react";


function Quiz() {

    const [p1, set_p1] = useState(0)
    const [p2, set_p2] = useState(0)
    const [p3, set_p3] = useState(0)
    const [p4, set_p4] = useState(0)
    const [total, set_total] = useState(0)

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
            <ul>
                <li>
                <label> <input name="p3" type="radio" onChange={()=> set_p3(0)}/> 10</label>
                </li>
                <li>
                <label> <input name="p3" type="radio" onChange={()=> set_p3(0)}/> 52151561</label>
                </li>
                <li>
                <label> <input name="p3" type="radio" onChange={()=> set_p3(0)}/> -40</label>
                </li>
                <li>
                <label> <input name="p3" type="radio" onChange={()=> set_p3(1)} /> 20</label>
                </li>
            </ul>

            <h2>Qual o melhor Anime</h2>
            <label> <input name="p4" onChange={()=> p4!="Berserk" ? set_p4(0): set_p4(1)} /></label>

            <hr />
            <button onClick={()=> set_total(p1+p2+p3+p4)}>Enviar respostas</button>

            <p>Total de Pontos: {total}</p>
            
        </div>
     )
}

export default Quiz;