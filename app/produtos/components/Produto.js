function Produto(attr) {
    return ( 
        
        <div style={{margin:10, border: "3px solid black" , width: 120 , padding: 10}}>
            <h2>{attr.nome}</h2>
            {
                attr.desconto != null &&
                    <p><strong>{attr.desconto}% Off</strong></p>
            }
            <p>R$ {attr.preco}</p>

            {
                attr.disponivel != null ?
                <button>Comprar</button>
                :
                <p>Indisponivel</p>
            }
        </div>
    );
}

export default Produto;