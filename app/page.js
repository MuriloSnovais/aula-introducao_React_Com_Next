'use client'

import { useState } from "react";
import "./home.css"

export default function Home() {

    
  let [itens_carrinho, set_itens_carrinho] = useState(0)
    
{/*  */}
  return (
    <div>
        <h1>Loja de plantas</h1>
        <p>Melhores plantas da cidade</p>
        <hr />
        <p className="Carrinho">Itens no Carrinho: {itens_carrinho} </p>
        {/* Usando Operadores Condicionas para não deixar a quantidade de itens no carrinho ficar negativo */}
        <button onClick={()=> itens_carrinho<=0 ? set_itens_carrinho(itens_carrinho=0) : set_itens_carrinho(itens_carrinho-=1)}> Remover Produto</button>
        {/* Para clicar e deixar o carrinho zerado :) */}
        <button onClick={()=> set_itens_carrinho(0) }> Limpar Carrinho</button>
        <hr />
        <h2>Produtos</h2>

        <div className="Produto">
        <img src="https://images.vexels.com/media/users/3/175596/isolated/lists/576d26978873909143de9476b45d9c74-planta-arvore-arbustos-folha-planta-plana.png" />
        <p>Especial do Jaka</p>
        <p>R$ 55,90 (Kilo)</p>
        <button onClick={()=> set_itens_carrinho(itens_carrinho+=1) }>Comprar</button>
        </div>
    </div>
  );
}
